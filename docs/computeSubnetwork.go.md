# `computeSubnetwork` Submodule <a name="`computeSubnetwork` Submodule" id="@cdktf/provider-google.computeSubnetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSubnetwork <a name="ComputeSubnetwork" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork google_compute_subnetwork}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesubnetwork"

computesubnetwork.NewComputeSubnetwork(scope Construct, id *string, config ComputeSubnetworkConfig) ComputeSubnetwork
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig">ComputeSubnetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig">ComputeSubnetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putParams">PutParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putSecondaryIpRange">PutSecondaryIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetEnableFlowLogs">ResetEnableFlowLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetExternalIpv6Prefix">ResetExternalIpv6Prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetIpCidrRange">ResetIpCidrRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetIpCollection">ResetIpCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetIpv6AccessType">ResetIpv6AccessType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetLogConfig">ResetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetParams">ResetParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPrivateIpGoogleAccess">ResetPrivateIpGoogleAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPrivateIpv6GoogleAccess">ResetPrivateIpv6GoogleAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPurpose">ResetPurpose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetReservedInternalRange">ResetReservedInternalRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetSecondaryIpRange">ResetSecondaryIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetSendSecondaryIpRangeIfEmpty">ResetSendSecondaryIpRangeIfEmpty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetStackType">ResetStackType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putLogConfig"></a>

```go
func PutLogConfig(value ComputeSubnetworkLogConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a>

---

##### `PutParams` <a name="PutParams" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putParams"></a>

```go
func PutParams(value ComputeSubnetworkParams)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParams">ComputeSubnetworkParams</a>

---

##### `PutSecondaryIpRange` <a name="PutSecondaryIpRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putSecondaryIpRange"></a>

```go
func PutSecondaryIpRange(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putSecondaryIpRange.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putTimeouts"></a>

```go
func PutTimeouts(value ComputeSubnetworkTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnableFlowLogs` <a name="ResetEnableFlowLogs" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetEnableFlowLogs"></a>

```go
func ResetEnableFlowLogs()
```

##### `ResetExternalIpv6Prefix` <a name="ResetExternalIpv6Prefix" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetExternalIpv6Prefix"></a>

```go
func ResetExternalIpv6Prefix()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetId"></a>

```go
func ResetId()
```

##### `ResetIpCidrRange` <a name="ResetIpCidrRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetIpCidrRange"></a>

```go
func ResetIpCidrRange()
```

##### `ResetIpCollection` <a name="ResetIpCollection" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetIpCollection"></a>

```go
func ResetIpCollection()
```

##### `ResetIpv6AccessType` <a name="ResetIpv6AccessType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetIpv6AccessType"></a>

```go
func ResetIpv6AccessType()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetLogConfig"></a>

```go
func ResetLogConfig()
```

##### `ResetParams` <a name="ResetParams" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetParams"></a>

```go
func ResetParams()
```

##### `ResetPrivateIpGoogleAccess` <a name="ResetPrivateIpGoogleAccess" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPrivateIpGoogleAccess"></a>

```go
func ResetPrivateIpGoogleAccess()
```

##### `ResetPrivateIpv6GoogleAccess` <a name="ResetPrivateIpv6GoogleAccess" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPrivateIpv6GoogleAccess"></a>

```go
func ResetPrivateIpv6GoogleAccess()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPurpose` <a name="ResetPurpose" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPurpose"></a>

```go
func ResetPurpose()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetReservedInternalRange` <a name="ResetReservedInternalRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetReservedInternalRange"></a>

```go
func ResetReservedInternalRange()
```

##### `ResetRole` <a name="ResetRole" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetRole"></a>

```go
func ResetRole()
```

##### `ResetSecondaryIpRange` <a name="ResetSecondaryIpRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetSecondaryIpRange"></a>

```go
func ResetSecondaryIpRange()
```

##### `ResetSendSecondaryIpRangeIfEmpty` <a name="ResetSendSecondaryIpRangeIfEmpty" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetSendSecondaryIpRangeIfEmpty"></a>

```go
func ResetSendSecondaryIpRangeIfEmpty()
```

##### `ResetStackType` <a name="ResetStackType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetStackType"></a>

```go
func ResetStackType()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeSubnetwork resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesubnetwork"

computesubnetwork.ComputeSubnetwork_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesubnetwork"

computesubnetwork.ComputeSubnetwork_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesubnetwork"

computesubnetwork.ComputeSubnetwork_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesubnetwork"

computesubnetwork.ComputeSubnetwork_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ComputeSubnetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeSubnetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeSubnetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ComputeSubnetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.gatewayAddress">GatewayAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.internalIpv6Prefix">InternalIpv6Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6CidrRange">Ipv6CidrRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6GceEndpoint">Ipv6GceEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference">ComputeSubnetworkLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.params">Params</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference">ComputeSubnetworkParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.secondaryIpRange">SecondaryIpRange</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList">ComputeSubnetworkSecondaryIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.subnetworkId">SubnetworkId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference">ComputeSubnetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.enableFlowLogsInput">EnableFlowLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.externalIpv6PrefixInput">ExternalIpv6PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipCidrRangeInput">IpCidrRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipCollectionInput">IpCollectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6AccessTypeInput">Ipv6AccessTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.logConfigInput">LogConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.paramsInput">ParamsInput</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParams">ComputeSubnetworkParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpGoogleAccessInput">PrivateIpGoogleAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpv6GoogleAccessInput">PrivateIpv6GoogleAccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.purposeInput">PurposeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.reservedInternalRangeInput">ReservedInternalRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.secondaryIpRangeInput">SecondaryIpRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.sendSecondaryIpRangeIfEmptyInput">SendSecondaryIpRangeIfEmptyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.stackTypeInput">StackTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.enableFlowLogs">EnableFlowLogs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.externalIpv6Prefix">ExternalIpv6Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipCidrRange">IpCidrRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipCollection">IpCollection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6AccessType">Ipv6AccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpGoogleAccess">PrivateIpGoogleAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpv6GoogleAccess">PrivateIpv6GoogleAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.purpose">Purpose</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.reservedInternalRange">ReservedInternalRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.sendSecondaryIpRangeIfEmpty">SendSecondaryIpRangeIfEmpty</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.stackType">StackType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `GatewayAddress`<sup>Required</sup> <a name="GatewayAddress" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.gatewayAddress"></a>

```go
func GatewayAddress() *string
```

- *Type:* *string

---

##### `InternalIpv6Prefix`<sup>Required</sup> <a name="InternalIpv6Prefix" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.internalIpv6Prefix"></a>

```go
func InternalIpv6Prefix() *string
```

- *Type:* *string

---

##### `Ipv6CidrRange`<sup>Required</sup> <a name="Ipv6CidrRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6CidrRange"></a>

```go
func Ipv6CidrRange() *string
```

- *Type:* *string

---

##### `Ipv6GceEndpoint`<sup>Required</sup> <a name="Ipv6GceEndpoint" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6GceEndpoint"></a>

```go
func Ipv6GceEndpoint() *string
```

- *Type:* *string

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.logConfig"></a>

```go
func LogConfig() ComputeSubnetworkLogConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference">ComputeSubnetworkLogConfigOutputReference</a>

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.params"></a>

```go
func Params() ComputeSubnetworkParamsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference">ComputeSubnetworkParamsOutputReference</a>

---

##### `SecondaryIpRange`<sup>Required</sup> <a name="SecondaryIpRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.secondaryIpRange"></a>

```go
func SecondaryIpRange() ComputeSubnetworkSecondaryIpRangeList
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList">ComputeSubnetworkSecondaryIpRangeList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetworkId`<sup>Required</sup> <a name="SubnetworkId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.subnetworkId"></a>

```go
func SubnetworkId() *f64
```

- *Type:* *f64

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.timeouts"></a>

```go
func Timeouts() ComputeSubnetworkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference">ComputeSubnetworkTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnableFlowLogsInput`<sup>Optional</sup> <a name="EnableFlowLogsInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.enableFlowLogsInput"></a>

```go
func EnableFlowLogsInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalIpv6PrefixInput`<sup>Optional</sup> <a name="ExternalIpv6PrefixInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.externalIpv6PrefixInput"></a>

```go
func ExternalIpv6PrefixInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpCidrRangeInput`<sup>Optional</sup> <a name="IpCidrRangeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipCidrRangeInput"></a>

```go
func IpCidrRangeInput() *string
```

- *Type:* *string

---

##### `IpCollectionInput`<sup>Optional</sup> <a name="IpCollectionInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipCollectionInput"></a>

```go
func IpCollectionInput() *string
```

- *Type:* *string

---

##### `Ipv6AccessTypeInput`<sup>Optional</sup> <a name="Ipv6AccessTypeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6AccessTypeInput"></a>

```go
func Ipv6AccessTypeInput() *string
```

- *Type:* *string

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.logConfigInput"></a>

```go
func LogConfigInput() ComputeSubnetworkLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.paramsInput"></a>

```go
func ParamsInput() ComputeSubnetworkParams
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParams">ComputeSubnetworkParams</a>

---

##### `PrivateIpGoogleAccessInput`<sup>Optional</sup> <a name="PrivateIpGoogleAccessInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpGoogleAccessInput"></a>

```go
func PrivateIpGoogleAccessInput() interface{}
```

- *Type:* interface{}

---

##### `PrivateIpv6GoogleAccessInput`<sup>Optional</sup> <a name="PrivateIpv6GoogleAccessInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpv6GoogleAccessInput"></a>

```go
func PrivateIpv6GoogleAccessInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PurposeInput`<sup>Optional</sup> <a name="PurposeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.purposeInput"></a>

```go
func PurposeInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ReservedInternalRangeInput`<sup>Optional</sup> <a name="ReservedInternalRangeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.reservedInternalRangeInput"></a>

```go
func ReservedInternalRangeInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `SecondaryIpRangeInput`<sup>Optional</sup> <a name="SecondaryIpRangeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.secondaryIpRangeInput"></a>

```go
func SecondaryIpRangeInput() interface{}
```

- *Type:* interface{}

---

##### `SendSecondaryIpRangeIfEmptyInput`<sup>Optional</sup> <a name="SendSecondaryIpRangeIfEmptyInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.sendSecondaryIpRangeIfEmptyInput"></a>

```go
func SendSecondaryIpRangeIfEmptyInput() interface{}
```

- *Type:* interface{}

---

##### `StackTypeInput`<sup>Optional</sup> <a name="StackTypeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.stackTypeInput"></a>

```go
func StackTypeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnableFlowLogs`<sup>Required</sup> <a name="EnableFlowLogs" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.enableFlowLogs"></a>

```go
func EnableFlowLogs() interface{}
```

- *Type:* interface{}

---

##### `ExternalIpv6Prefix`<sup>Required</sup> <a name="ExternalIpv6Prefix" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.externalIpv6Prefix"></a>

```go
func ExternalIpv6Prefix() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipCidrRange"></a>

```go
func IpCidrRange() *string
```

- *Type:* *string

---

##### `IpCollection`<sup>Required</sup> <a name="IpCollection" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipCollection"></a>

```go
func IpCollection() *string
```

- *Type:* *string

---

##### `Ipv6AccessType`<sup>Required</sup> <a name="Ipv6AccessType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6AccessType"></a>

```go
func Ipv6AccessType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `PrivateIpGoogleAccess`<sup>Required</sup> <a name="PrivateIpGoogleAccess" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpGoogleAccess"></a>

```go
func PrivateIpGoogleAccess() interface{}
```

- *Type:* interface{}

---

##### `PrivateIpv6GoogleAccess`<sup>Required</sup> <a name="PrivateIpv6GoogleAccess" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpv6GoogleAccess"></a>

```go
func PrivateIpv6GoogleAccess() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Purpose`<sup>Required</sup> <a name="Purpose" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.purpose"></a>

```go
func Purpose() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ReservedInternalRange`<sup>Required</sup> <a name="ReservedInternalRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.reservedInternalRange"></a>

```go
func ReservedInternalRange() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `SendSecondaryIpRangeIfEmpty`<sup>Required</sup> <a name="SendSecondaryIpRangeIfEmpty" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.sendSecondaryIpRangeIfEmpty"></a>

```go
func SendSecondaryIpRangeIfEmpty() interface{}
```

- *Type:* interface{}

---

##### `StackType`<sup>Required</sup> <a name="StackType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.stackType"></a>

```go
func StackType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSubnetworkConfig <a name="ComputeSubnetworkConfig" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesubnetwork"

&computesubnetwork.ComputeSubnetworkConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Network: *string,
	Description: *string,
	EnableFlowLogs: interface{},
	ExternalIpv6Prefix: *string,
	Id: *string,
	IpCidrRange: *string,
	IpCollection: *string,
	Ipv6AccessType: *string,
	LogConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.computeSubnetwork.ComputeSubnetworkLogConfig,
	Params: github.com/cdktf/cdktf-provider-google-go/google/v16.computeSubnetwork.ComputeSubnetworkParams,
	PrivateIpGoogleAccess: interface{},
	PrivateIpv6GoogleAccess: *string,
	Project: *string,
	Purpose: *string,
	Region: *string,
	ReservedInternalRange: *string,
	Role: *string,
	SecondaryIpRange: interface{},
	SendSecondaryIpRangeIfEmpty: interface{},
	StackType: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.computeSubnetwork.ComputeSubnetworkTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.name">Name</a></code> | <code>*string</code> | The name of the resource, provided by the client when initially creating the resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.network">Network</a></code> | <code>*string</code> | The network this subnet belongs to. Only networks that are in the distributed mode can have subnetworks. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.enableFlowLogs">EnableFlowLogs</a></code> | <code>interface{}</code> | Whether to enable flow logging for this subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.externalIpv6Prefix">ExternalIpv6Prefix</a></code> | <code>*string</code> | The range of external IPv6 addresses that are owned by this subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#id ComputeSubnetwork#id}. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.ipCidrRange">IpCidrRange</a></code> | <code>*string</code> | The range of internal addresses that are owned by this subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.ipCollection">IpCollection</a></code> | <code>*string</code> | Resource reference of a PublicDelegatedPrefix. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.ipv6AccessType">Ipv6AccessType</a></code> | <code>*string</code> | The access type of IPv6 address this subnet holds. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.params">Params</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParams">ComputeSubnetworkParams</a></code> | params block. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.privateIpGoogleAccess">PrivateIpGoogleAccess</a></code> | <code>interface{}</code> | When enabled, VMs in this subnetwork without external IP addresses can access Google APIs and services by using Private Google Access. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.privateIpv6GoogleAccess">PrivateIpv6GoogleAccess</a></code> | <code>*string</code> | The private IPv6 google access type for the VMs in this subnet. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#project ComputeSubnetwork#project}. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.purpose">Purpose</a></code> | <code>*string</code> | The purpose of the resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.region">Region</a></code> | <code>*string</code> | The GCP region for this subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.reservedInternalRange">ReservedInternalRange</a></code> | <code>*string</code> | The ID of the reserved internal range. Must be prefixed with 'networkconnectivity.googleapis.com' E.g. 'networkconnectivity.googleapis.com/projects/{project}/locations/global/internalRanges/{rangeId}'. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.role">Role</a></code> | <code>*string</code> | The role of subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.secondaryIpRange">SecondaryIpRange</a></code> | <code>interface{}</code> | secondary_ip_range block. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.sendSecondaryIpRangeIfEmpty">SendSecondaryIpRangeIfEmpty</a></code> | <code>interface{}</code> | Controls the removal behavior of secondary_ip_range. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.stackType">StackType</a></code> | <code>*string</code> | The stack type for this subnet to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the resource, provided by the client when initially creating the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#name ComputeSubnetwork#name}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The network this subnet belongs to. Only networks that are in the distributed mode can have subnetworks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#network ComputeSubnetwork#network}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Provide this property when
you create the resource. This field can be set only at resource
creation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#description ComputeSubnetwork#description}

---

##### `EnableFlowLogs`<sup>Optional</sup> <a name="EnableFlowLogs" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.enableFlowLogs"></a>

```go
EnableFlowLogs interface{}
```

- *Type:* interface{}

Whether to enable flow logging for this subnetwork.

If this field is not explicitly set,
it will not appear in get listings. If not set the default behavior is determined by the
org policy, if there is no org policy specified, then it will default to disabled.
This field isn't supported if the subnet purpose field is set to REGIONAL_MANAGED_PROXY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#enable_flow_logs ComputeSubnetwork#enable_flow_logs}

---

##### `ExternalIpv6Prefix`<sup>Optional</sup> <a name="ExternalIpv6Prefix" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.externalIpv6Prefix"></a>

```go
ExternalIpv6Prefix *string
```

- *Type:* *string

The range of external IPv6 addresses that are owned by this subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#external_ipv6_prefix ComputeSubnetwork#external_ipv6_prefix}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#id ComputeSubnetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpCidrRange`<sup>Optional</sup> <a name="IpCidrRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.ipCidrRange"></a>

```go
IpCidrRange *string
```

- *Type:* *string

The range of internal addresses that are owned by this subnetwork.

Provide this property when you create the subnetwork. For example,
10.0.0.0/8 or 192.168.0.0/16. Ranges must be unique and
non-overlapping within a network. Only IPv4 is supported.
Field is optional when 'reserved_internal_range' is defined, otherwise required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#ip_cidr_range ComputeSubnetwork#ip_cidr_range}

---

##### `IpCollection`<sup>Optional</sup> <a name="IpCollection" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.ipCollection"></a>

```go
IpCollection *string
```

- *Type:* *string

Resource reference of a PublicDelegatedPrefix.

The PDP must be a sub-PDP
in EXTERNAL_IPV6_SUBNETWORK_CREATION mode.
Use one of the following formats to specify a sub-PDP when creating an
IPv6 NetLB forwarding rule using BYOIP:
Full resource URL, as in:

* 'https://www.googleapis.com/compute/v1/projects/{{projectId}}/regions/{{region}}/publicDelegatedPrefixes/{{sub-pdp-name}}'
  Partial URL, as in:
* 'projects/{{projectId}}/regions/region/publicDelegatedPrefixes/{{sub-pdp-name}}'
* 'regions/{{region}}/publicDelegatedPrefixes/{{sub-pdp-name}}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#ip_collection ComputeSubnetwork#ip_collection}

---

##### `Ipv6AccessType`<sup>Optional</sup> <a name="Ipv6AccessType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.ipv6AccessType"></a>

```go
Ipv6AccessType *string
```

- *Type:* *string

The access type of IPv6 address this subnet holds.

It's immutable and can only be specified during creation
or the first time the subnet is updated into IPV4_IPV6 dual stack. If the ipv6_type is EXTERNAL then this subnet
cannot enable direct path. Possible values: ["EXTERNAL", "INTERNAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#ipv6_access_type ComputeSubnetwork#ipv6_access_type}

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.logConfig"></a>

```go
LogConfig ComputeSubnetworkLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#log_config ComputeSubnetwork#log_config}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.params"></a>

```go
Params ComputeSubnetworkParams
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParams">ComputeSubnetworkParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#params ComputeSubnetwork#params}

---

##### `PrivateIpGoogleAccess`<sup>Optional</sup> <a name="PrivateIpGoogleAccess" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.privateIpGoogleAccess"></a>

```go
PrivateIpGoogleAccess interface{}
```

- *Type:* interface{}

When enabled, VMs in this subnetwork without external IP addresses can access Google APIs and services by using Private Google Access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#private_ip_google_access ComputeSubnetwork#private_ip_google_access}

---

##### `PrivateIpv6GoogleAccess`<sup>Optional</sup> <a name="PrivateIpv6GoogleAccess" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.privateIpv6GoogleAccess"></a>

```go
PrivateIpv6GoogleAccess *string
```

- *Type:* *string

The private IPv6 google access type for the VMs in this subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#private_ipv6_google_access ComputeSubnetwork#private_ipv6_google_access}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#project ComputeSubnetwork#project}.

---

##### `Purpose`<sup>Optional</sup> <a name="Purpose" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.purpose"></a>

```go
Purpose *string
```

- *Type:* *string

The purpose of the resource.

This field can be either 'PRIVATE', 'REGIONAL_MANAGED_PROXY', 'GLOBAL_MANAGED_PROXY', 'PRIVATE_SERVICE_CONNECT', 'PEER_MIGRATION' or 'PRIVATE_NAT'([Beta](https://terraform.io/docs/providers/google/guides/provider_versions.html)).
A subnet with purpose set to 'REGIONAL_MANAGED_PROXY' is a user-created subnetwork that is reserved for regional Envoy-based load balancers.
A subnetwork in a given region with purpose set to 'GLOBAL_MANAGED_PROXY' is a proxy-only subnet and is shared between all the cross-regional Envoy-based load balancers.
A subnetwork with purpose set to 'PRIVATE_SERVICE_CONNECT' reserves the subnet for hosting a Private Service Connect published service.
A subnetwork with purpose set to 'PEER_MIGRATION' is a user created subnetwork that is reserved for migrating resources from one peered network to another.
A subnetwork with purpose set to 'PRIVATE_NAT' is used as source range for Private NAT gateways.
Note that 'REGIONAL_MANAGED_PROXY' is the preferred setting for all regional Envoy load balancers.
If unspecified, the purpose defaults to 'PRIVATE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#purpose ComputeSubnetwork#purpose}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The GCP region for this subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#region ComputeSubnetwork#region}

---

##### `ReservedInternalRange`<sup>Optional</sup> <a name="ReservedInternalRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.reservedInternalRange"></a>

```go
ReservedInternalRange *string
```

- *Type:* *string

The ID of the reserved internal range. Must be prefixed with 'networkconnectivity.googleapis.com' E.g. 'networkconnectivity.googleapis.com/projects/{project}/locations/global/internalRanges/{rangeId}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#reserved_internal_range ComputeSubnetwork#reserved_internal_range}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

The role of subnetwork.

Currently, this field is only used when 'purpose' is 'REGIONAL_MANAGED_PROXY'.
The value can be set to 'ACTIVE' or 'BACKUP'.
An 'ACTIVE' subnetwork is one that is currently being used for Envoy-based load balancers in a region.
A 'BACKUP' subnetwork is one that is ready to be promoted to 'ACTIVE' or is currently draining. Possible values: ["ACTIVE", "BACKUP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#role ComputeSubnetwork#role}

---

##### `SecondaryIpRange`<sup>Optional</sup> <a name="SecondaryIpRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.secondaryIpRange"></a>

```go
SecondaryIpRange interface{}
```

- *Type:* interface{}

secondary_ip_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#secondary_ip_range ComputeSubnetwork#secondary_ip_range}

---

##### `SendSecondaryIpRangeIfEmpty`<sup>Optional</sup> <a name="SendSecondaryIpRangeIfEmpty" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.sendSecondaryIpRangeIfEmpty"></a>

```go
SendSecondaryIpRangeIfEmpty interface{}
```

- *Type:* interface{}

Controls the removal behavior of secondary_ip_range.

When false, removing secondary_ip_range from config will not produce a diff as
the provider will default to the API's value.
When true, the provider will treat removing secondary_ip_range as sending an
empty list of secondary IP ranges to the API.
Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#send_secondary_ip_range_if_empty ComputeSubnetwork#send_secondary_ip_range_if_empty}

---

##### `StackType`<sup>Optional</sup> <a name="StackType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.stackType"></a>

```go
StackType *string
```

- *Type:* *string

The stack type for this subnet to identify whether the IPv6 feature is enabled or not.

If not specified IPV4_ONLY will be used. Possible values: ["IPV4_ONLY", "IPV4_IPV6", "IPV6_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#stack_type ComputeSubnetwork#stack_type}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.timeouts"></a>

```go
Timeouts ComputeSubnetworkTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#timeouts ComputeSubnetwork#timeouts}

---

### ComputeSubnetworkLogConfig <a name="ComputeSubnetworkLogConfig" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesubnetwork"

&computesubnetwork.ComputeSubnetworkLogConfig {
	AggregationInterval: *string,
	FilterExpr: *string,
	FlowSampling: *f64,
	Metadata: *string,
	MetadataFields: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.aggregationInterval">AggregationInterval</a></code> | <code>*string</code> | Can only be specified if VPC flow logging for this subnetwork is enabled. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.filterExpr">FilterExpr</a></code> | <code>*string</code> | Export filter used to define which VPC flow logs should be logged, as as CEL expression. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.flowSampling">FlowSampling</a></code> | <code>*f64</code> | Can only be specified if VPC flow logging for this subnetwork is enabled. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.metadata">Metadata</a></code> | <code>*string</code> | Can only be specified if VPC flow logging for this subnetwork is enabled. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.metadataFields">MetadataFields</a></code> | <code>*[]*string</code> | List of metadata fields that should be added to reported logs. |

---

##### `AggregationInterval`<sup>Optional</sup> <a name="AggregationInterval" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.aggregationInterval"></a>

```go
AggregationInterval *string
```

- *Type:* *string

Can only be specified if VPC flow logging for this subnetwork is enabled.

Toggles the aggregation interval for collecting flow logs. Increasing the
interval time will reduce the amount of generated flow logs for long
lasting connections. Default is an interval of 5 seconds per connection. Default value: "INTERVAL_5_SEC" Possible values: ["INTERVAL_5_SEC", "INTERVAL_30_SEC", "INTERVAL_1_MIN", "INTERVAL_5_MIN", "INTERVAL_10_MIN", "INTERVAL_15_MIN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#aggregation_interval ComputeSubnetwork#aggregation_interval}

---

##### `FilterExpr`<sup>Optional</sup> <a name="FilterExpr" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.filterExpr"></a>

```go
FilterExpr *string
```

- *Type:* *string

Export filter used to define which VPC flow logs should be logged, as as CEL expression.

See
https://cloud.google.com/vpc/docs/flow-logs#filtering for details on how to format this field.
The default value is 'true', which evaluates to include everything.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#filter_expr ComputeSubnetwork#filter_expr}

---

##### `FlowSampling`<sup>Optional</sup> <a name="FlowSampling" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.flowSampling"></a>

```go
FlowSampling *f64
```

- *Type:* *f64

Can only be specified if VPC flow logging for this subnetwork is enabled.

The value of the field must be in [0, 1]. Set the sampling rate of VPC
flow logs within the subnetwork where 1.0 means all collected logs are
reported and 0.0 means no logs are reported. Default is 0.5 which means
half of all collected logs are reported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#flow_sampling ComputeSubnetwork#flow_sampling}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.metadata"></a>

```go
Metadata *string
```

- *Type:* *string

Can only be specified if VPC flow logging for this subnetwork is enabled.

Configures whether metadata fields should be added to the reported VPC
flow logs. Default value: "INCLUDE_ALL_METADATA" Possible values: ["EXCLUDE_ALL_METADATA", "INCLUDE_ALL_METADATA", "CUSTOM_METADATA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#metadata ComputeSubnetwork#metadata}

---

##### `MetadataFields`<sup>Optional</sup> <a name="MetadataFields" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.metadataFields"></a>

```go
MetadataFields *[]*string
```

- *Type:* *[]*string

List of metadata fields that should be added to reported logs.

Can only be specified if VPC flow logs for this subnetwork is enabled and "metadata" is set to CUSTOM_METADATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#metadata_fields ComputeSubnetwork#metadata_fields}

---

### ComputeSubnetworkParams <a name="ComputeSubnetworkParams" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesubnetwork"

&computesubnetwork.ComputeSubnetworkParams {
	ResourceManagerTags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParams.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>*map[string]*string</code> | Resource manager tags to be bound to the subnetwork. |

---

##### `ResourceManagerTags`<sup>Optional</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParams.property.resourceManagerTags"></a>

```go
ResourceManagerTags *map[string]*string
```

- *Type:* *map[string]*string

Resource manager tags to be bound to the subnetwork.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456. The field is ignored when empty.
The field is immutable and causes resource replacement when mutated. This field is only
set at create time and modifying this field after creation will trigger recreation.
To apply tags to an existing resource, see the google_tags_tag_binding resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#resource_manager_tags ComputeSubnetwork#resource_manager_tags}

---

### ComputeSubnetworkSecondaryIpRange <a name="ComputeSubnetworkSecondaryIpRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesubnetwork"

&computesubnetwork.ComputeSubnetworkSecondaryIpRange {
	RangeName: *string,
	IpCidrRange: *string,
	ReservedInternalRange: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.property.rangeName">RangeName</a></code> | <code>*string</code> | The name associated with this subnetwork secondary range, used when adding an alias IP range to a VM instance. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.property.ipCidrRange">IpCidrRange</a></code> | <code>*string</code> | The range of IP addresses belonging to this subnetwork secondary range. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.property.reservedInternalRange">ReservedInternalRange</a></code> | <code>*string</code> | The ID of the reserved internal range. Must be prefixed with 'networkconnectivity.googleapis.com' E.g. 'networkconnectivity.googleapis.com/projects/{project}/locations/global/internalRanges/{rangeId}'. |

---

##### `RangeName`<sup>Required</sup> <a name="RangeName" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.property.rangeName"></a>

```go
RangeName *string
```

- *Type:* *string

The name associated with this subnetwork secondary range, used when adding an alias IP range to a VM instance.

The name must
be 1-63 characters long, and comply with RFC1035. The name
must be unique within the subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#range_name ComputeSubnetwork#range_name}

---

##### `IpCidrRange`<sup>Optional</sup> <a name="IpCidrRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.property.ipCidrRange"></a>

```go
IpCidrRange *string
```

- *Type:* *string

The range of IP addresses belonging to this subnetwork secondary range.

Provide this property when you create the subnetwork.
Ranges must be unique and non-overlapping with all primary and
secondary IP ranges within a network. Only IPv4 is supported.
Field is optional when 'reserved_internal_range' is defined, otherwise required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#ip_cidr_range ComputeSubnetwork#ip_cidr_range}

---

##### `ReservedInternalRange`<sup>Optional</sup> <a name="ReservedInternalRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.property.reservedInternalRange"></a>

```go
ReservedInternalRange *string
```

- *Type:* *string

The ID of the reserved internal range. Must be prefixed with 'networkconnectivity.googleapis.com' E.g. 'networkconnectivity.googleapis.com/projects/{project}/locations/global/internalRanges/{rangeId}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#reserved_internal_range ComputeSubnetwork#reserved_internal_range}

---

### ComputeSubnetworkTimeouts <a name="ComputeSubnetworkTimeouts" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesubnetwork"

&computesubnetwork.ComputeSubnetworkTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#create ComputeSubnetwork#create}. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#delete ComputeSubnetwork#delete}. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#update ComputeSubnetwork#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#create ComputeSubnetwork#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#delete ComputeSubnetwork#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_subnetwork#update ComputeSubnetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeSubnetworkLogConfigOutputReference <a name="ComputeSubnetworkLogConfigOutputReference" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesubnetwork"

computesubnetwork.NewComputeSubnetworkLogConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSubnetworkLogConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetAggregationInterval">ResetAggregationInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetFilterExpr">ResetFilterExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetFlowSampling">ResetFlowSampling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetMetadataFields">ResetMetadataFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAggregationInterval` <a name="ResetAggregationInterval" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetAggregationInterval"></a>

```go
func ResetAggregationInterval()
```

##### `ResetFilterExpr` <a name="ResetFilterExpr" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetFilterExpr"></a>

```go
func ResetFilterExpr()
```

##### `ResetFlowSampling` <a name="ResetFlowSampling" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetFlowSampling"></a>

```go
func ResetFlowSampling()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetMetadataFields` <a name="ResetMetadataFields" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetMetadataFields"></a>

```go
func ResetMetadataFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.aggregationIntervalInput">AggregationIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.filterExprInput">FilterExprInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.flowSamplingInput">FlowSamplingInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataFieldsInput">MetadataFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataInput">MetadataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.aggregationInterval">AggregationInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.filterExpr">FilterExpr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.flowSampling">FlowSampling</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataFields">MetadataFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregationIntervalInput`<sup>Optional</sup> <a name="AggregationIntervalInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.aggregationIntervalInput"></a>

```go
func AggregationIntervalInput() *string
```

- *Type:* *string

---

##### `FilterExprInput`<sup>Optional</sup> <a name="FilterExprInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.filterExprInput"></a>

```go
func FilterExprInput() *string
```

- *Type:* *string

---

##### `FlowSamplingInput`<sup>Optional</sup> <a name="FlowSamplingInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.flowSamplingInput"></a>

```go
func FlowSamplingInput() *f64
```

- *Type:* *f64

---

##### `MetadataFieldsInput`<sup>Optional</sup> <a name="MetadataFieldsInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataFieldsInput"></a>

```go
func MetadataFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataInput"></a>

```go
func MetadataInput() *string
```

- *Type:* *string

---

##### `AggregationInterval`<sup>Required</sup> <a name="AggregationInterval" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.aggregationInterval"></a>

```go
func AggregationInterval() *string
```

- *Type:* *string

---

##### `FilterExpr`<sup>Required</sup> <a name="FilterExpr" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.filterExpr"></a>

```go
func FilterExpr() *string
```

- *Type:* *string

---

##### `FlowSampling`<sup>Required</sup> <a name="FlowSampling" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.flowSampling"></a>

```go
func FlowSampling() *f64
```

- *Type:* *f64

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `MetadataFields`<sup>Required</sup> <a name="MetadataFields" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataFields"></a>

```go
func MetadataFields() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSubnetworkLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a>

---


### ComputeSubnetworkParamsOutputReference <a name="ComputeSubnetworkParamsOutputReference" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesubnetwork"

computesubnetwork.NewComputeSubnetworkParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSubnetworkParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.resetResourceManagerTags">ResetResourceManagerTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceManagerTags` <a name="ResetResourceManagerTags" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.resetResourceManagerTags"></a>

```go
func ResetResourceManagerTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.property.resourceManagerTagsInput">ResourceManagerTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParams">ComputeSubnetworkParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceManagerTagsInput`<sup>Optional</sup> <a name="ResourceManagerTagsInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.property.resourceManagerTagsInput"></a>

```go
func ResourceManagerTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.property.resourceManagerTags"></a>

```go
func ResourceManagerTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSubnetworkParams
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParams">ComputeSubnetworkParams</a>

---


### ComputeSubnetworkSecondaryIpRangeList <a name="ComputeSubnetworkSecondaryIpRangeList" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesubnetwork"

computesubnetwork.NewComputeSubnetworkSecondaryIpRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeSubnetworkSecondaryIpRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.get"></a>

```go
func Get(index *f64) ComputeSubnetworkSecondaryIpRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSubnetworkSecondaryIpRangeOutputReference <a name="ComputeSubnetworkSecondaryIpRangeOutputReference" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesubnetwork"

computesubnetwork.NewComputeSubnetworkSecondaryIpRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeSubnetworkSecondaryIpRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resetIpCidrRange">ResetIpCidrRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resetReservedInternalRange">ResetReservedInternalRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpCidrRange` <a name="ResetIpCidrRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resetIpCidrRange"></a>

```go
func ResetIpCidrRange()
```

##### `ResetReservedInternalRange` <a name="ResetReservedInternalRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resetReservedInternalRange"></a>

```go
func ResetReservedInternalRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.ipCidrRangeInput">IpCidrRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.rangeNameInput">RangeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.reservedInternalRangeInput">ReservedInternalRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.ipCidrRange">IpCidrRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.rangeName">RangeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.reservedInternalRange">ReservedInternalRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpCidrRangeInput`<sup>Optional</sup> <a name="IpCidrRangeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.ipCidrRangeInput"></a>

```go
func IpCidrRangeInput() *string
```

- *Type:* *string

---

##### `RangeNameInput`<sup>Optional</sup> <a name="RangeNameInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.rangeNameInput"></a>

```go
func RangeNameInput() *string
```

- *Type:* *string

---

##### `ReservedInternalRangeInput`<sup>Optional</sup> <a name="ReservedInternalRangeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.reservedInternalRangeInput"></a>

```go
func ReservedInternalRangeInput() *string
```

- *Type:* *string

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.ipCidrRange"></a>

```go
func IpCidrRange() *string
```

- *Type:* *string

---

##### `RangeName`<sup>Required</sup> <a name="RangeName" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.rangeName"></a>

```go
func RangeName() *string
```

- *Type:* *string

---

##### `ReservedInternalRange`<sup>Required</sup> <a name="ReservedInternalRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.reservedInternalRange"></a>

```go
func ReservedInternalRange() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSubnetworkTimeoutsOutputReference <a name="ComputeSubnetworkTimeoutsOutputReference" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computesubnetwork"

computesubnetwork.NewComputeSubnetworkTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSubnetworkTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



