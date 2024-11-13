# `computeInterconnect` Submodule <a name="`computeInterconnect` Submodule" id="@cdktf/provider-google.computeInterconnect"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeInterconnect <a name="ComputeInterconnect" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect google_compute_interconnect}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeinterconnect"

computeinterconnect.NewComputeInterconnect(scope Construct, id *string, config ComputeInterconnectConfig) ComputeInterconnect
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig">ComputeInterconnectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig">ComputeInterconnectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.putMacsec">PutMacsec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetAdminEnabled">ResetAdminEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetCustomerName">ResetCustomerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetMacsec">ResetMacsec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetMacsecEnabled">ResetMacsecEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetNocContactEmail">ResetNocContactEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetRemoteLocation">ResetRemoteLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetRequestedFeatures">ResetRequestedFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMacsec` <a name="PutMacsec" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.putMacsec"></a>

```go
func PutMacsec(value ComputeInterconnectMacsec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.putMacsec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec">ComputeInterconnectMacsec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.putTimeouts"></a>

```go
func PutTimeouts(value ComputeInterconnectTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts">ComputeInterconnectTimeouts</a>

---

##### `ResetAdminEnabled` <a name="ResetAdminEnabled" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetAdminEnabled"></a>

```go
func ResetAdminEnabled()
```

##### `ResetCustomerName` <a name="ResetCustomerName" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetCustomerName"></a>

```go
func ResetCustomerName()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetMacsec` <a name="ResetMacsec" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetMacsec"></a>

```go
func ResetMacsec()
```

##### `ResetMacsecEnabled` <a name="ResetMacsecEnabled" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetMacsecEnabled"></a>

```go
func ResetMacsecEnabled()
```

##### `ResetNocContactEmail` <a name="ResetNocContactEmail" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetNocContactEmail"></a>

```go
func ResetNocContactEmail()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRemoteLocation` <a name="ResetRemoteLocation" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetRemoteLocation"></a>

```go
func ResetRemoteLocation()
```

##### `ResetRequestedFeatures` <a name="ResetRequestedFeatures" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetRequestedFeatures"></a>

```go
func ResetRequestedFeatures()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeInterconnect resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeinterconnect"

computeinterconnect.ComputeInterconnect_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeinterconnect"

computeinterconnect.ComputeInterconnect_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeinterconnect"

computeinterconnect.ComputeInterconnect_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeinterconnect"

computeinterconnect.ComputeInterconnect_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ComputeInterconnect resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeInterconnect to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeInterconnect that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ComputeInterconnect to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.availableFeatures">AvailableFeatures</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.circuitInfos">CircuitInfos</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList">ComputeInterconnectCircuitInfosList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.expectedOutages">ExpectedOutages</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList">ComputeInterconnectExpectedOutagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.googleIpAddress">GoogleIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.googleReferenceId">GoogleReferenceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.interconnectAttachments">InterconnectAttachments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.labelFingerprint">LabelFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.macsec">Macsec</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference">ComputeInterconnectMacsecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.operationalStatus">OperationalStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.peerIpAddress">PeerIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.provisionedLinkCount">ProvisionedLinkCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.satisfiesPzs">SatisfiesPzs</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference">ComputeInterconnectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.adminEnabledInput">AdminEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.customerNameInput">CustomerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.interconnectTypeInput">InterconnectTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.linkTypeInput">LinkTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.macsecEnabledInput">MacsecEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.macsecInput">MacsecInput</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec">ComputeInterconnectMacsec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.nocContactEmailInput">NocContactEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.remoteLocationInput">RemoteLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.requestedFeaturesInput">RequestedFeaturesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.requestedLinkCountInput">RequestedLinkCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.adminEnabled">AdminEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.customerName">CustomerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.interconnectType">InterconnectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.linkType">LinkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.macsecEnabled">MacsecEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.nocContactEmail">NocContactEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.remoteLocation">RemoteLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.requestedFeatures">RequestedFeatures</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.requestedLinkCount">RequestedLinkCount</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailableFeatures`<sup>Required</sup> <a name="AvailableFeatures" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.availableFeatures"></a>

```go
func AvailableFeatures() *[]*string
```

- *Type:* *[]*string

---

##### `CircuitInfos`<sup>Required</sup> <a name="CircuitInfos" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.circuitInfos"></a>

```go
func CircuitInfos() ComputeInterconnectCircuitInfosList
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList">ComputeInterconnectCircuitInfosList</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ExpectedOutages`<sup>Required</sup> <a name="ExpectedOutages" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.expectedOutages"></a>

```go
func ExpectedOutages() ComputeInterconnectExpectedOutagesList
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList">ComputeInterconnectExpectedOutagesList</a>

---

##### `GoogleIpAddress`<sup>Required</sup> <a name="GoogleIpAddress" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.googleIpAddress"></a>

```go
func GoogleIpAddress() *string
```

- *Type:* *string

---

##### `GoogleReferenceId`<sup>Required</sup> <a name="GoogleReferenceId" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.googleReferenceId"></a>

```go
func GoogleReferenceId() *string
```

- *Type:* *string

---

##### `InterconnectAttachments`<sup>Required</sup> <a name="InterconnectAttachments" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.interconnectAttachments"></a>

```go
func InterconnectAttachments() *[]*string
```

- *Type:* *[]*string

---

##### `LabelFingerprint`<sup>Required</sup> <a name="LabelFingerprint" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.labelFingerprint"></a>

```go
func LabelFingerprint() *string
```

- *Type:* *string

---

##### `Macsec`<sup>Required</sup> <a name="Macsec" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.macsec"></a>

```go
func Macsec() ComputeInterconnectMacsecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference">ComputeInterconnectMacsecOutputReference</a>

---

##### `OperationalStatus`<sup>Required</sup> <a name="OperationalStatus" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.operationalStatus"></a>

```go
func OperationalStatus() *string
```

- *Type:* *string

---

##### `PeerIpAddress`<sup>Required</sup> <a name="PeerIpAddress" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.peerIpAddress"></a>

```go
func PeerIpAddress() *string
```

- *Type:* *string

---

##### `ProvisionedLinkCount`<sup>Required</sup> <a name="ProvisionedLinkCount" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.provisionedLinkCount"></a>

```go
func ProvisionedLinkCount() *f64
```

- *Type:* *f64

---

##### `SatisfiesPzs`<sup>Required</sup> <a name="SatisfiesPzs" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.satisfiesPzs"></a>

```go
func SatisfiesPzs() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.timeouts"></a>

```go
func Timeouts() ComputeInterconnectTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference">ComputeInterconnectTimeoutsOutputReference</a>

---

##### `AdminEnabledInput`<sup>Optional</sup> <a name="AdminEnabledInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.adminEnabledInput"></a>

```go
func AdminEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CustomerNameInput`<sup>Optional</sup> <a name="CustomerNameInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.customerNameInput"></a>

```go
func CustomerNameInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InterconnectTypeInput`<sup>Optional</sup> <a name="InterconnectTypeInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.interconnectTypeInput"></a>

```go
func InterconnectTypeInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LinkTypeInput`<sup>Optional</sup> <a name="LinkTypeInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.linkTypeInput"></a>

```go
func LinkTypeInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MacsecEnabledInput`<sup>Optional</sup> <a name="MacsecEnabledInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.macsecEnabledInput"></a>

```go
func MacsecEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MacsecInput`<sup>Optional</sup> <a name="MacsecInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.macsecInput"></a>

```go
func MacsecInput() ComputeInterconnectMacsec
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec">ComputeInterconnectMacsec</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NocContactEmailInput`<sup>Optional</sup> <a name="NocContactEmailInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.nocContactEmailInput"></a>

```go
func NocContactEmailInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RemoteLocationInput`<sup>Optional</sup> <a name="RemoteLocationInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.remoteLocationInput"></a>

```go
func RemoteLocationInput() *string
```

- *Type:* *string

---

##### `RequestedFeaturesInput`<sup>Optional</sup> <a name="RequestedFeaturesInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.requestedFeaturesInput"></a>

```go
func RequestedFeaturesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RequestedLinkCountInput`<sup>Optional</sup> <a name="RequestedLinkCountInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.requestedLinkCountInput"></a>

```go
func RequestedLinkCountInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AdminEnabled`<sup>Required</sup> <a name="AdminEnabled" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.adminEnabled"></a>

```go
func AdminEnabled() interface{}
```

- *Type:* interface{}

---

##### `CustomerName`<sup>Required</sup> <a name="CustomerName" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.customerName"></a>

```go
func CustomerName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InterconnectType`<sup>Required</sup> <a name="InterconnectType" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.interconnectType"></a>

```go
func InterconnectType() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LinkType`<sup>Required</sup> <a name="LinkType" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.linkType"></a>

```go
func LinkType() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MacsecEnabled`<sup>Required</sup> <a name="MacsecEnabled" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.macsecEnabled"></a>

```go
func MacsecEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NocContactEmail`<sup>Required</sup> <a name="NocContactEmail" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.nocContactEmail"></a>

```go
func NocContactEmail() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RemoteLocation`<sup>Required</sup> <a name="RemoteLocation" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.remoteLocation"></a>

```go
func RemoteLocation() *string
```

- *Type:* *string

---

##### `RequestedFeatures`<sup>Required</sup> <a name="RequestedFeatures" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.requestedFeatures"></a>

```go
func RequestedFeatures() *[]*string
```

- *Type:* *[]*string

---

##### `RequestedLinkCount`<sup>Required</sup> <a name="RequestedLinkCount" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.requestedLinkCount"></a>

```go
func RequestedLinkCount() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnect.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeInterconnectCircuitInfos <a name="ComputeInterconnectCircuitInfos" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfos"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfos.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeinterconnect"

&computeinterconnect.ComputeInterconnectCircuitInfos {

}
```


### ComputeInterconnectConfig <a name="ComputeInterconnectConfig" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeinterconnect"

&computeinterconnect.ComputeInterconnectConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InterconnectType: *string,
	LinkType: *string,
	Name: *string,
	RequestedLinkCount: *f64,
	AdminEnabled: interface{},
	CustomerName: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	Macsec: github.com/cdktf/cdktf-provider-google-go/google.computeInterconnect.ComputeInterconnectMacsec,
	MacsecEnabled: interface{},
	NocContactEmail: *string,
	Project: *string,
	RemoteLocation: *string,
	RequestedFeatures: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeInterconnect.ComputeInterconnectTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.interconnectType">InterconnectType</a></code> | <code>*string</code> | Type of interconnect. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.linkType">LinkType</a></code> | <code>*string</code> | Type of link requested. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.requestedLinkCount">RequestedLinkCount</a></code> | <code>*f64</code> | Target number of physical links in the link bundle, as requested by the customer. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.adminEnabled">AdminEnabled</a></code> | <code>interface{}</code> | Administrative status of the interconnect. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.customerName">CustomerName</a></code> | <code>*string</code> | Customer name, to put in the Letter of Authorization as the party authorized to request a crossconnect. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#id ComputeInterconnect#id}. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels for this resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.location">Location</a></code> | <code>*string</code> | URL of the InterconnectLocation object that represents where this connection is to be provisioned. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.macsec">Macsec</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec">ComputeInterconnectMacsec</a></code> | macsec block. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.macsecEnabled">MacsecEnabled</a></code> | <code>interface{}</code> | Enable or disable MACsec on this Interconnect connection. MACsec enablement fails if the MACsec object is not specified. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.nocContactEmail">NocContactEmail</a></code> | <code>*string</code> | Email address to contact the customer NOC for operations and maintenance notifications regarding this Interconnect. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#project ComputeInterconnect#project}. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.remoteLocation">RemoteLocation</a></code> | <code>*string</code> | Indicates that this is a Cross-Cloud Interconnect. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.requestedFeatures">RequestedFeatures</a></code> | <code>*[]*string</code> | interconnects.list of features requested for this Interconnect connection. Options: IF_MACSEC ( If specified then the connection is created on MACsec capable hardware ports. If not specified, the default value is false, which allocates non-MACsec capable ports first if available). Note that MACSEC is still technically allowed for compatibility reasons, but it does not work with the API, and will be removed in an upcoming major version. Possible values: ["MACSEC", "IF_MACSEC"]. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts">ComputeInterconnectTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InterconnectType`<sup>Required</sup> <a name="InterconnectType" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.interconnectType"></a>

```go
InterconnectType *string
```

- *Type:* *string

Type of interconnect.

Note that a value IT_PRIVATE has been deprecated in favor of DEDICATED.
Can take one of the following values:

* PARTNER: A partner-managed interconnection shared between customers though a partner.
* DEDICATED: A dedicated physical interconnection with the customer. Possible values: ["DEDICATED", "PARTNER", "IT_PRIVATE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#interconnect_type ComputeInterconnect#interconnect_type}

---

##### `LinkType`<sup>Required</sup> <a name="LinkType" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.linkType"></a>

```go
LinkType *string
```

- *Type:* *string

Type of link requested.

Note that this field indicates the speed of each of the links in the
bundle, not the speed of the entire bundle. Can take one of the following values:

* LINK_TYPE_ETHERNET_10G_LR: A 10G Ethernet with LR optics.
* LINK_TYPE_ETHERNET_100G_LR: A 100G Ethernet with LR optics. Possible values: ["LINK_TYPE_ETHERNET_10G_LR", "LINK_TYPE_ETHERNET_100G_LR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#link_type ComputeInterconnect#link_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is created. The name must be
1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#name ComputeInterconnect#name}

---

##### `RequestedLinkCount`<sup>Required</sup> <a name="RequestedLinkCount" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.requestedLinkCount"></a>

```go
RequestedLinkCount *f64
```

- *Type:* *f64

Target number of physical links in the link bundle, as requested by the customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#requested_link_count ComputeInterconnect#requested_link_count}

---

##### `AdminEnabled`<sup>Optional</sup> <a name="AdminEnabled" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.adminEnabled"></a>

```go
AdminEnabled interface{}
```

- *Type:* interface{}

Administrative status of the interconnect.

When this is set to true, the Interconnect is
functional and can carry traffic. When set to false, no packets can be carried over the
interconnect and no BGP routes are exchanged over it. By default, the status is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#admin_enabled ComputeInterconnect#admin_enabled}

---

##### `CustomerName`<sup>Optional</sup> <a name="CustomerName" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.customerName"></a>

```go
CustomerName *string
```

- *Type:* *string

Customer name, to put in the Letter of Authorization as the party authorized to request a crossconnect.

This field is required for Dedicated and Partner Interconnect, should not be specified
for cross-cloud interconnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#customer_name ComputeInterconnect#customer_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#description ComputeInterconnect#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#id ComputeInterconnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels for this resource.

These can only be added or modified by the setLabels
method. Each label key/value pair must comply with RFC1035. Label values may be empty.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#labels ComputeInterconnect#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

URL of the InterconnectLocation object that represents where this connection is to be provisioned.

Specifies the location inside Google's Networks, should not be passed in case of cross-cloud interconnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#location ComputeInterconnect#location}

---

##### `Macsec`<sup>Optional</sup> <a name="Macsec" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.macsec"></a>

```go
Macsec ComputeInterconnectMacsec
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec">ComputeInterconnectMacsec</a>

macsec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#macsec ComputeInterconnect#macsec}

---

##### `MacsecEnabled`<sup>Optional</sup> <a name="MacsecEnabled" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.macsecEnabled"></a>

```go
MacsecEnabled interface{}
```

- *Type:* interface{}

Enable or disable MACsec on this Interconnect connection. MACsec enablement fails if the MACsec object is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#macsec_enabled ComputeInterconnect#macsec_enabled}

---

##### `NocContactEmail`<sup>Optional</sup> <a name="NocContactEmail" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.nocContactEmail"></a>

```go
NocContactEmail *string
```

- *Type:* *string

Email address to contact the customer NOC for operations and maintenance notifications regarding this Interconnect.

If specified, this will be used for notifications in addition to
all other forms described, such as Cloud Monitoring logs alerting and Cloud Notifications.
This field is required for users who sign up for Cloud Interconnect using workforce identity
federation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#noc_contact_email ComputeInterconnect#noc_contact_email}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#project ComputeInterconnect#project}.

---

##### `RemoteLocation`<sup>Optional</sup> <a name="RemoteLocation" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.remoteLocation"></a>

```go
RemoteLocation *string
```

- *Type:* *string

Indicates that this is a Cross-Cloud Interconnect.

This field specifies the location outside
of Google's network that the interconnect is connected to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#remote_location ComputeInterconnect#remote_location}

---

##### `RequestedFeatures`<sup>Optional</sup> <a name="RequestedFeatures" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.requestedFeatures"></a>

```go
RequestedFeatures *[]*string
```

- *Type:* *[]*string

interconnects.list of features requested for this Interconnect connection. Options: IF_MACSEC ( If specified then the connection is created on MACsec capable hardware ports. If not specified, the default value is false, which allocates non-MACsec capable ports first if available). Note that MACSEC is still technically allowed for compatibility reasons, but it does not work with the API, and will be removed in an upcoming major version. Possible values: ["MACSEC", "IF_MACSEC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#requested_features ComputeInterconnect#requested_features}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectConfig.property.timeouts"></a>

```go
Timeouts ComputeInterconnectTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts">ComputeInterconnectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#timeouts ComputeInterconnect#timeouts}

---

### ComputeInterconnectExpectedOutages <a name="ComputeInterconnectExpectedOutages" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutages.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeinterconnect"

&computeinterconnect.ComputeInterconnectExpectedOutages {

}
```


### ComputeInterconnectMacsec <a name="ComputeInterconnectMacsec" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeinterconnect"

&computeinterconnect.ComputeInterconnectMacsec {
	PreSharedKeys: interface{},
	FailOpen: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec.property.preSharedKeys">PreSharedKeys</a></code> | <code>interface{}</code> | pre_shared_keys block. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec.property.failOpen">FailOpen</a></code> | <code>interface{}</code> | If set to true, the Interconnect connection is configured with a should-secure MACsec security policy, that allows the Google router to fallback to cleartext traffic if the MKA session cannot be established. |

---

##### `PreSharedKeys`<sup>Required</sup> <a name="PreSharedKeys" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec.property.preSharedKeys"></a>

```go
PreSharedKeys interface{}
```

- *Type:* interface{}

pre_shared_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#pre_shared_keys ComputeInterconnect#pre_shared_keys}

---

##### `FailOpen`<sup>Optional</sup> <a name="FailOpen" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec.property.failOpen"></a>

```go
FailOpen interface{}
```

- *Type:* interface{}

If set to true, the Interconnect connection is configured with a should-secure MACsec security policy, that allows the Google router to fallback to cleartext traffic if the MKA session cannot be established.

By default, the Interconnect
connection is configured with a must-secure security policy that drops all traffic
if the MKA session cannot be established with your router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#fail_open ComputeInterconnect#fail_open}

---

### ComputeInterconnectMacsecPreSharedKeys <a name="ComputeInterconnectMacsecPreSharedKeys" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeinterconnect"

&computeinterconnect.ComputeInterconnectMacsecPreSharedKeys {
	Name: *string,
	FailOpen: interface{},
	StartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys.property.name">Name</a></code> | <code>*string</code> | A name for this pre-shared key. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys.property.failOpen">FailOpen</a></code> | <code>interface{}</code> | If set to true, the Interconnect connection is configured with a should-secure MACsec security policy, that allows the Google router to fallback to cleartext traffic if the MKA session cannot be established. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys.property.startTime">StartTime</a></code> | <code>*string</code> | A RFC3339 timestamp on or after which the key is valid. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys.property.name"></a>

```go
Name *string
```

- *Type:* *string

A name for this pre-shared key.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first character
must be a lowercase letter, and all following characters must be a dash, lowercase
letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#name ComputeInterconnect#name}

---

##### `FailOpen`<sup>Optional</sup> <a name="FailOpen" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys.property.failOpen"></a>

```go
FailOpen interface{}
```

- *Type:* interface{}

If set to true, the Interconnect connection is configured with a should-secure MACsec security policy, that allows the Google router to fallback to cleartext traffic if the MKA session cannot be established.

By default, the Interconnect
connection is configured with a must-secure security policy that drops all traffic
if the MKA session cannot be established with your router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#fail_open ComputeInterconnect#fail_open}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeys.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

A RFC3339 timestamp on or after which the key is valid.

startTime can be in the
future. If the keychain has a single key, startTime can be omitted. If the keychain
has multiple keys, startTime is mandatory for each key. The start times of keys must
be in increasing order. The start times of two consecutive keys must be at least 6
hours apart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#start_time ComputeInterconnect#start_time}

---

### ComputeInterconnectTimeouts <a name="ComputeInterconnectTimeouts" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeinterconnect"

&computeinterconnect.ComputeInterconnectTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#create ComputeInterconnect#create}. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#delete ComputeInterconnect#delete}. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#update ComputeInterconnect#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#create ComputeInterconnect#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#delete ComputeInterconnect#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/compute_interconnect#update ComputeInterconnect#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeInterconnectCircuitInfosList <a name="ComputeInterconnectCircuitInfosList" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeinterconnect"

computeinterconnect.NewComputeInterconnectCircuitInfosList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeInterconnectCircuitInfosList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.get"></a>

```go
func Get(index *f64) ComputeInterconnectCircuitInfosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ComputeInterconnectCircuitInfosOutputReference <a name="ComputeInterconnectCircuitInfosOutputReference" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeinterconnect"

computeinterconnect.NewComputeInterconnectCircuitInfosOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeInterconnectCircuitInfosOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.customerDemarcId">CustomerDemarcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.googleCircuitId">GoogleCircuitId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.googleDemarcId">GoogleDemarcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfos">ComputeInterconnectCircuitInfos</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerDemarcId`<sup>Required</sup> <a name="CustomerDemarcId" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.customerDemarcId"></a>

```go
func CustomerDemarcId() *string
```

- *Type:* *string

---

##### `GoogleCircuitId`<sup>Required</sup> <a name="GoogleCircuitId" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.googleCircuitId"></a>

```go
func GoogleCircuitId() *string
```

- *Type:* *string

---

##### `GoogleDemarcId`<sup>Required</sup> <a name="GoogleDemarcId" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.googleDemarcId"></a>

```go
func GoogleDemarcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfosOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeInterconnectCircuitInfos
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectCircuitInfos">ComputeInterconnectCircuitInfos</a>

---


### ComputeInterconnectExpectedOutagesList <a name="ComputeInterconnectExpectedOutagesList" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeinterconnect"

computeinterconnect.NewComputeInterconnectExpectedOutagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeInterconnectExpectedOutagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.get"></a>

```go
func Get(index *f64) ComputeInterconnectExpectedOutagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ComputeInterconnectExpectedOutagesOutputReference <a name="ComputeInterconnectExpectedOutagesOutputReference" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeinterconnect"

computeinterconnect.NewComputeInterconnectExpectedOutagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeInterconnectExpectedOutagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.affectedCircuits">AffectedCircuits</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.issueType">IssueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutages">ComputeInterconnectExpectedOutages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AffectedCircuits`<sup>Required</sup> <a name="AffectedCircuits" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.affectedCircuits"></a>

```go
func AffectedCircuits() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `IssueType`<sup>Required</sup> <a name="IssueType" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.issueType"></a>

```go
func IssueType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutagesOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeInterconnectExpectedOutages
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectExpectedOutages">ComputeInterconnectExpectedOutages</a>

---


### ComputeInterconnectMacsecOutputReference <a name="ComputeInterconnectMacsecOutputReference" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeinterconnect"

computeinterconnect.NewComputeInterconnectMacsecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeInterconnectMacsecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.putPreSharedKeys">PutPreSharedKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.resetFailOpen">ResetFailOpen</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPreSharedKeys` <a name="PutPreSharedKeys" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.putPreSharedKeys"></a>

```go
func PutPreSharedKeys(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.putPreSharedKeys.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFailOpen` <a name="ResetFailOpen" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.resetFailOpen"></a>

```go
func ResetFailOpen()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.preSharedKeys">PreSharedKeys</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList">ComputeInterconnectMacsecPreSharedKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.failOpenInput">FailOpenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.preSharedKeysInput">PreSharedKeysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.failOpen">FailOpen</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec">ComputeInterconnectMacsec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PreSharedKeys`<sup>Required</sup> <a name="PreSharedKeys" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.preSharedKeys"></a>

```go
func PreSharedKeys() ComputeInterconnectMacsecPreSharedKeysList
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList">ComputeInterconnectMacsecPreSharedKeysList</a>

---

##### `FailOpenInput`<sup>Optional</sup> <a name="FailOpenInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.failOpenInput"></a>

```go
func FailOpenInput() interface{}
```

- *Type:* interface{}

---

##### `PreSharedKeysInput`<sup>Optional</sup> <a name="PreSharedKeysInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.preSharedKeysInput"></a>

```go
func PreSharedKeysInput() interface{}
```

- *Type:* interface{}

---

##### `FailOpen`<sup>Required</sup> <a name="FailOpen" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.failOpen"></a>

```go
func FailOpen() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeInterconnectMacsec
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsec">ComputeInterconnectMacsec</a>

---


### ComputeInterconnectMacsecPreSharedKeysList <a name="ComputeInterconnectMacsecPreSharedKeysList" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeinterconnect"

computeinterconnect.NewComputeInterconnectMacsecPreSharedKeysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeInterconnectMacsecPreSharedKeysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.get"></a>

```go
func Get(index *f64) ComputeInterconnectMacsecPreSharedKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeInterconnectMacsecPreSharedKeysOutputReference <a name="ComputeInterconnectMacsecPreSharedKeysOutputReference" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeinterconnect"

computeinterconnect.NewComputeInterconnectMacsecPreSharedKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeInterconnectMacsecPreSharedKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.resetFailOpen">ResetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFailOpen` <a name="ResetFailOpen" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.resetFailOpen"></a>

```go
func ResetFailOpen()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.failOpenInput">FailOpenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.failOpen">FailOpen</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FailOpenInput`<sup>Optional</sup> <a name="FailOpenInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.failOpenInput"></a>

```go
func FailOpenInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `FailOpen`<sup>Required</sup> <a name="FailOpen" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.failOpen"></a>

```go
func FailOpen() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectMacsecPreSharedKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeInterconnectTimeoutsOutputReference <a name="ComputeInterconnectTimeoutsOutputReference" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeinterconnect"

computeinterconnect.NewComputeInterconnectTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeInterconnectTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeInterconnect.ComputeInterconnectTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



