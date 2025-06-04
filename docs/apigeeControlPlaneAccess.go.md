# `apigeeControlPlaneAccess` Submodule <a name="`apigeeControlPlaneAccess` Submodule" id="@cdktf/provider-google.apigeeControlPlaneAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeControlPlaneAccess <a name="ApigeeControlPlaneAccess" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_control_plane_access google_apigee_control_plane_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/apigeecontrolplaneaccess"

apigeecontrolplaneaccess.NewApigeeControlPlaneAccess(scope Construct, id *string, config ApigeeControlPlaneAccessConfig) ApigeeControlPlaneAccess
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig">ApigeeControlPlaneAccessConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig">ApigeeControlPlaneAccessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetAnalyticsPublisherIdentities">ResetAnalyticsPublisherIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetSynchronizerIdentities">ResetSynchronizerIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.putTimeouts"></a>

```go
func PutTimeouts(value ApigeeControlPlaneAccessTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts">ApigeeControlPlaneAccessTimeouts</a>

---

##### `ResetAnalyticsPublisherIdentities` <a name="ResetAnalyticsPublisherIdentities" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetAnalyticsPublisherIdentities"></a>

```go
func ResetAnalyticsPublisherIdentities()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetId"></a>

```go
func ResetId()
```

##### `ResetSynchronizerIdentities` <a name="ResetSynchronizerIdentities" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetSynchronizerIdentities"></a>

```go
func ResetSynchronizerIdentities()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeControlPlaneAccess resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/apigeecontrolplaneaccess"

apigeecontrolplaneaccess.ApigeeControlPlaneAccess_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/apigeecontrolplaneaccess"

apigeecontrolplaneaccess.ApigeeControlPlaneAccess_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/apigeecontrolplaneaccess"

apigeecontrolplaneaccess.ApigeeControlPlaneAccess_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/apigeecontrolplaneaccess"

apigeecontrolplaneaccess.ApigeeControlPlaneAccess_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApigeeControlPlaneAccess resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApigeeControlPlaneAccess to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApigeeControlPlaneAccess that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_control_plane_access#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeControlPlaneAccess to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference">ApigeeControlPlaneAccessTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.analyticsPublisherIdentitiesInput">AnalyticsPublisherIdentitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.synchronizerIdentitiesInput">SynchronizerIdentitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.analyticsPublisherIdentities">AnalyticsPublisherIdentities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.synchronizerIdentities">SynchronizerIdentities</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.timeouts"></a>

```go
func Timeouts() ApigeeControlPlaneAccessTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference">ApigeeControlPlaneAccessTimeoutsOutputReference</a>

---

##### `AnalyticsPublisherIdentitiesInput`<sup>Optional</sup> <a name="AnalyticsPublisherIdentitiesInput" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.analyticsPublisherIdentitiesInput"></a>

```go
func AnalyticsPublisherIdentitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SynchronizerIdentitiesInput`<sup>Optional</sup> <a name="SynchronizerIdentitiesInput" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.synchronizerIdentitiesInput"></a>

```go
func SynchronizerIdentitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AnalyticsPublisherIdentities`<sup>Required</sup> <a name="AnalyticsPublisherIdentities" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.analyticsPublisherIdentities"></a>

```go
func AnalyticsPublisherIdentities() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SynchronizerIdentities`<sup>Required</sup> <a name="SynchronizerIdentities" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.synchronizerIdentities"></a>

```go
func SynchronizerIdentities() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeControlPlaneAccessConfig <a name="ApigeeControlPlaneAccessConfig" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/apigeecontrolplaneaccess"

&apigeecontrolplaneaccess.ApigeeControlPlaneAccessConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AnalyticsPublisherIdentities: *[]*string,
	Id: *string,
	SynchronizerIdentities: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v15.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.name">Name</a></code> | <code>*string</code> | Name of the Apigee organization. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.analyticsPublisherIdentities">AnalyticsPublisherIdentities</a></code> | <code>*[]*string</code> | Array of service accounts authorized to publish analytics data to the control plane, each specified using the following format: 'serviceAccount:service-account-name'. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_control_plane_access#id ApigeeControlPlaneAccess#id}. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.synchronizerIdentities">SynchronizerIdentities</a></code> | <code>*[]*string</code> | Array of service accounts to grant access to control plane resources (for the Synchronizer component), each specified using the following format: 'serviceAccount:service-account-name'. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts">ApigeeControlPlaneAccessTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the Apigee organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_control_plane_access#name ApigeeControlPlaneAccess#name}

---

##### `AnalyticsPublisherIdentities`<sup>Optional</sup> <a name="AnalyticsPublisherIdentities" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.analyticsPublisherIdentities"></a>

```go
AnalyticsPublisherIdentities *[]*string
```

- *Type:* *[]*string

Array of service accounts authorized to publish analytics data to the control plane, each specified using the following format: 'serviceAccount:service-account-name'.

The 'service-account-name' is formatted like an email address. For example: serviceAccount@my_project_id.iam.gserviceaccount.com

You might specify multiple service accounts, for example, if you have multiple environments and wish to assign a unique service account to each one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_control_plane_access#analytics_publisher_identities ApigeeControlPlaneAccess#analytics_publisher_identities}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_control_plane_access#id ApigeeControlPlaneAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SynchronizerIdentities`<sup>Optional</sup> <a name="SynchronizerIdentities" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.synchronizerIdentities"></a>

```go
SynchronizerIdentities *[]*string
```

- *Type:* *[]*string

Array of service accounts to grant access to control plane resources (for the Synchronizer component), each specified using the following format: 'serviceAccount:service-account-name'.

The 'service-account-name' is formatted like an email address. For example: serviceAccount@my_project_id.iam.gserviceaccount.com

You might specify multiple service accounts, for example, if you have multiple environments and wish to assign a unique service account to each one.

The service accounts must have **Apigee Synchronizer Manager** role. See also [Create service accounts](https://cloud.google.com/apigee/docs/hybrid/v1.8/sa-about#create-the-service-accounts).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_control_plane_access#synchronizer_identities ApigeeControlPlaneAccess#synchronizer_identities}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.timeouts"></a>

```go
Timeouts ApigeeControlPlaneAccessTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts">ApigeeControlPlaneAccessTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_control_plane_access#timeouts ApigeeControlPlaneAccess#timeouts}

---

### ApigeeControlPlaneAccessTimeouts <a name="ApigeeControlPlaneAccessTimeouts" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/apigeecontrolplaneaccess"

&apigeecontrolplaneaccess.ApigeeControlPlaneAccessTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_control_plane_access#create ApigeeControlPlaneAccess#create}. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_control_plane_access#delete ApigeeControlPlaneAccess#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_control_plane_access#update ApigeeControlPlaneAccess#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_control_plane_access#create ApigeeControlPlaneAccess#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_control_plane_access#delete ApigeeControlPlaneAccess#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_control_plane_access#update ApigeeControlPlaneAccess#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeControlPlaneAccessTimeoutsOutputReference <a name="ApigeeControlPlaneAccessTimeoutsOutputReference" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/apigeecontrolplaneaccess"

apigeecontrolplaneaccess.NewApigeeControlPlaneAccessTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeControlPlaneAccessTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



