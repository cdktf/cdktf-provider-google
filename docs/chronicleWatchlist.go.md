# `chronicleWatchlist` Submodule <a name="`chronicleWatchlist` Submodule" id="@cdktf/provider-google.chronicleWatchlist"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleWatchlist <a name="ChronicleWatchlist" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/chronicle_watchlist google_chronicle_watchlist}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/chroniclewatchlist"

chroniclewatchlist.NewChronicleWatchlist(scope Construct, id *string, config ChronicleWatchlistConfig) ChronicleWatchlist
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig">ChronicleWatchlistConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig">ChronicleWatchlistConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putEntityPopulationMechanism">PutEntityPopulationMechanism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putWatchlistUserPreferences">PutWatchlistUserPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetMultiplyingFactor">ResetMultiplyingFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetWatchlistId">ResetWatchlistId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetWatchlistUserPreferences">ResetWatchlistUserPreferences</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEntityPopulationMechanism` <a name="PutEntityPopulationMechanism" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putEntityPopulationMechanism"></a>

```go
func PutEntityPopulationMechanism(value ChronicleWatchlistEntityPopulationMechanism)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putEntityPopulationMechanism.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putTimeouts"></a>

```go
func PutTimeouts(value ChronicleWatchlistTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a>

---

##### `PutWatchlistUserPreferences` <a name="PutWatchlistUserPreferences" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putWatchlistUserPreferences"></a>

```go
func PutWatchlistUserPreferences(value ChronicleWatchlistWatchlistUserPreferences)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putWatchlistUserPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetId"></a>

```go
func ResetId()
```

##### `ResetMultiplyingFactor` <a name="ResetMultiplyingFactor" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetMultiplyingFactor"></a>

```go
func ResetMultiplyingFactor()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWatchlistId` <a name="ResetWatchlistId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetWatchlistId"></a>

```go
func ResetWatchlistId()
```

##### `ResetWatchlistUserPreferences` <a name="ResetWatchlistUserPreferences" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetWatchlistUserPreferences"></a>

```go
func ResetWatchlistUserPreferences()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ChronicleWatchlist resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/chroniclewatchlist"

chroniclewatchlist.ChronicleWatchlist_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/chroniclewatchlist"

chroniclewatchlist.ChronicleWatchlist_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/chroniclewatchlist"

chroniclewatchlist.ChronicleWatchlist_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/chroniclewatchlist"

chroniclewatchlist.ChronicleWatchlist_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ChronicleWatchlist resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ChronicleWatchlist to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ChronicleWatchlist that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/chronicle_watchlist#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ChronicleWatchlist to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityCount">EntityCount</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList">ChronicleWatchlistEntityCountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityPopulationMechanism">EntityPopulationMechanism</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference">ChronicleWatchlistEntityPopulationMechanismOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference">ChronicleWatchlistTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistUserPreferences">WatchlistUserPreferences</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference">ChronicleWatchlistWatchlistUserPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityPopulationMechanismInput">EntityPopulationMechanismInput</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.multiplyingFactorInput">MultiplyingFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistIdInput">WatchlistIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistUserPreferencesInput">WatchlistUserPreferencesInput</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.multiplyingFactor">MultiplyingFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistId">WatchlistId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EntityCount`<sup>Required</sup> <a name="EntityCount" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityCount"></a>

```go
func EntityCount() ChronicleWatchlistEntityCountList
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList">ChronicleWatchlistEntityCountList</a>

---

##### `EntityPopulationMechanism`<sup>Required</sup> <a name="EntityPopulationMechanism" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityPopulationMechanism"></a>

```go
func EntityPopulationMechanism() ChronicleWatchlistEntityPopulationMechanismOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference">ChronicleWatchlistEntityPopulationMechanismOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.timeouts"></a>

```go
func Timeouts() ChronicleWatchlistTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference">ChronicleWatchlistTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `WatchlistUserPreferences`<sup>Required</sup> <a name="WatchlistUserPreferences" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistUserPreferences"></a>

```go
func WatchlistUserPreferences() ChronicleWatchlistWatchlistUserPreferencesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference">ChronicleWatchlistWatchlistUserPreferencesOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EntityPopulationMechanismInput`<sup>Optional</sup> <a name="EntityPopulationMechanismInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityPopulationMechanismInput"></a>

```go
func EntityPopulationMechanismInput() ChronicleWatchlistEntityPopulationMechanism
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MultiplyingFactorInput`<sup>Optional</sup> <a name="MultiplyingFactorInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.multiplyingFactorInput"></a>

```go
func MultiplyingFactorInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WatchlistIdInput`<sup>Optional</sup> <a name="WatchlistIdInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistIdInput"></a>

```go
func WatchlistIdInput() *string
```

- *Type:* *string

---

##### `WatchlistUserPreferencesInput`<sup>Optional</sup> <a name="WatchlistUserPreferencesInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistUserPreferencesInput"></a>

```go
func WatchlistUserPreferencesInput() ChronicleWatchlistWatchlistUserPreferences
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MultiplyingFactor`<sup>Required</sup> <a name="MultiplyingFactor" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.multiplyingFactor"></a>

```go
func MultiplyingFactor() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `WatchlistId`<sup>Required</sup> <a name="WatchlistId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistId"></a>

```go
func WatchlistId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleWatchlistConfig <a name="ChronicleWatchlistConfig" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/chroniclewatchlist"

&chroniclewatchlist.ChronicleWatchlistConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	EntityPopulationMechanism: github.com/cdktf/cdktf-provider-google-go/google/v16.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism,
	Instance: *string,
	Location: *string,
	Description: *string,
	Id: *string,
	MultiplyingFactor: *f64,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.chronicleWatchlist.ChronicleWatchlistTimeouts,
	WatchlistId: *string,
	WatchlistUserPreferences: github.com/cdktf/cdktf-provider-google-go/google/v16.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Required. Display name of the watchlist. Note that it must be at least one character and less than 63 characters (https://google.aip.dev/148). |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.entityPopulationMechanism">EntityPopulationMechanism</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a></code> | entity_population_mechanism block. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.instance">Instance</a></code> | <code>*string</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.location">Location</a></code> | <code>*string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.description">Description</a></code> | <code>*string</code> | Optional. Description of the watchlist. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/chronicle_watchlist#id ChronicleWatchlist#id}. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.multiplyingFactor">MultiplyingFactor</a></code> | <code>*f64</code> | Optional. Weight applied to the risk score for entities in this watchlist. The default is 1.0 if it is not specified. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/chronicle_watchlist#project ChronicleWatchlist#project}. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.watchlistId">WatchlistId</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.watchlistUserPreferences">WatchlistUserPreferences</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a></code> | watchlist_user_preferences block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Required. Display name of the watchlist. Note that it must be at least one character and less than 63 characters (https://google.aip.dev/148).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/chronicle_watchlist#display_name ChronicleWatchlist#display_name}

---

##### `EntityPopulationMechanism`<sup>Required</sup> <a name="EntityPopulationMechanism" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.entityPopulationMechanism"></a>

```go
EntityPopulationMechanism ChronicleWatchlistEntityPopulationMechanism
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a>

entity_population_mechanism block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/chronicle_watchlist#entity_population_mechanism ChronicleWatchlist#entity_population_mechanism}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/chronicle_watchlist#instance ChronicleWatchlist#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/chronicle_watchlist#location ChronicleWatchlist#location}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional. Description of the watchlist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/chronicle_watchlist#description ChronicleWatchlist#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/chronicle_watchlist#id ChronicleWatchlist#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MultiplyingFactor`<sup>Optional</sup> <a name="MultiplyingFactor" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.multiplyingFactor"></a>

```go
MultiplyingFactor *f64
```

- *Type:* *f64

Optional. Weight applied to the risk score for entities in this watchlist. The default is 1.0 if it is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/chronicle_watchlist#multiplying_factor ChronicleWatchlist#multiplying_factor}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/chronicle_watchlist#project ChronicleWatchlist#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.timeouts"></a>

```go
Timeouts ChronicleWatchlistTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/chronicle_watchlist#timeouts ChronicleWatchlist#timeouts}

---

##### `WatchlistId`<sup>Optional</sup> <a name="WatchlistId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.watchlistId"></a>

```go
WatchlistId *string
```

- *Type:* *string

Optional.

The ID to use for the watchlist,
which will become the final component of the watchlist's resource name.
This value should be 4-63 characters, and valid characters
are /a-z-/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/chronicle_watchlist#watchlist_id ChronicleWatchlist#watchlist_id}

---

##### `WatchlistUserPreferences`<sup>Optional</sup> <a name="WatchlistUserPreferences" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.watchlistUserPreferences"></a>

```go
WatchlistUserPreferences ChronicleWatchlistWatchlistUserPreferences
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a>

watchlist_user_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/chronicle_watchlist#watchlist_user_preferences ChronicleWatchlist#watchlist_user_preferences}

---

### ChronicleWatchlistEntityCount <a name="ChronicleWatchlistEntityCount" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/chroniclewatchlist"

&chroniclewatchlist.ChronicleWatchlistEntityCount {

}
```


### ChronicleWatchlistEntityPopulationMechanism <a name="ChronicleWatchlistEntityPopulationMechanism" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/chroniclewatchlist"

&chroniclewatchlist.ChronicleWatchlistEntityPopulationMechanism {
	Manual: github.com/cdktf/cdktf-provider-google-go/google/v16.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism.property.manual">Manual</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a></code> | manual block. |

---

##### `Manual`<sup>Optional</sup> <a name="Manual" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism.property.manual"></a>

```go
Manual ChronicleWatchlistEntityPopulationMechanismManual
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a>

manual block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/chronicle_watchlist#manual ChronicleWatchlist#manual}

---

### ChronicleWatchlistEntityPopulationMechanismManual <a name="ChronicleWatchlistEntityPopulationMechanismManual" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/chroniclewatchlist"

&chroniclewatchlist.ChronicleWatchlistEntityPopulationMechanismManual {

}
```


### ChronicleWatchlistTimeouts <a name="ChronicleWatchlistTimeouts" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/chroniclewatchlist"

&chroniclewatchlist.ChronicleWatchlistTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/chronicle_watchlist#create ChronicleWatchlist#create}. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/chronicle_watchlist#delete ChronicleWatchlist#delete}. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/chronicle_watchlist#update ChronicleWatchlist#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/chronicle_watchlist#create ChronicleWatchlist#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/chronicle_watchlist#delete ChronicleWatchlist#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/chronicle_watchlist#update ChronicleWatchlist#update}.

---

### ChronicleWatchlistWatchlistUserPreferences <a name="ChronicleWatchlistWatchlistUserPreferences" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/chroniclewatchlist"

&chroniclewatchlist.ChronicleWatchlistWatchlistUserPreferences {
	Pinned: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences.property.pinned">Pinned</a></code> | <code>interface{}</code> | Optional. Whether the watchlist is pinned on the dashboard. |

---

##### `Pinned`<sup>Optional</sup> <a name="Pinned" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences.property.pinned"></a>

```go
Pinned interface{}
```

- *Type:* interface{}

Optional. Whether the watchlist is pinned on the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/chronicle_watchlist#pinned ChronicleWatchlist#pinned}

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleWatchlistEntityCountList <a name="ChronicleWatchlistEntityCountList" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/chroniclewatchlist"

chroniclewatchlist.NewChronicleWatchlistEntityCountList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChronicleWatchlistEntityCountList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.get"></a>

```go
func Get(index *f64) ChronicleWatchlistEntityCountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ChronicleWatchlistEntityCountOutputReference <a name="ChronicleWatchlistEntityCountOutputReference" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/chroniclewatchlist"

chroniclewatchlist.NewChronicleWatchlistEntityCountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChronicleWatchlistEntityCountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.asset">Asset</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.user">User</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCount">ChronicleWatchlistEntityCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Asset`<sup>Required</sup> <a name="Asset" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.asset"></a>

```go
func Asset() *f64
```

- *Type:* *f64

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.user"></a>

```go
func User() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.internalValue"></a>

```go
func InternalValue() ChronicleWatchlistEntityCount
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCount">ChronicleWatchlistEntityCount</a>

---


### ChronicleWatchlistEntityPopulationMechanismManualOutputReference <a name="ChronicleWatchlistEntityPopulationMechanismManualOutputReference" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/chroniclewatchlist"

chroniclewatchlist.NewChronicleWatchlistEntityPopulationMechanismManualOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChronicleWatchlistEntityPopulationMechanismManualOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.internalValue"></a>

```go
func InternalValue() ChronicleWatchlistEntityPopulationMechanismManual
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a>

---


### ChronicleWatchlistEntityPopulationMechanismOutputReference <a name="ChronicleWatchlistEntityPopulationMechanismOutputReference" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/chroniclewatchlist"

chroniclewatchlist.NewChronicleWatchlistEntityPopulationMechanismOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChronicleWatchlistEntityPopulationMechanismOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.putManual">PutManual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.resetManual">ResetManual</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManual` <a name="PutManual" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.putManual"></a>

```go
func PutManual(value ChronicleWatchlistEntityPopulationMechanismManual)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.putManual.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a>

---

##### `ResetManual` <a name="ResetManual" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.resetManual"></a>

```go
func ResetManual()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.manual">Manual</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference">ChronicleWatchlistEntityPopulationMechanismManualOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.manualInput">ManualInput</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Manual`<sup>Required</sup> <a name="Manual" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.manual"></a>

```go
func Manual() ChronicleWatchlistEntityPopulationMechanismManualOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference">ChronicleWatchlistEntityPopulationMechanismManualOutputReference</a>

---

##### `ManualInput`<sup>Optional</sup> <a name="ManualInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.manualInput"></a>

```go
func ManualInput() ChronicleWatchlistEntityPopulationMechanismManual
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.internalValue"></a>

```go
func InternalValue() ChronicleWatchlistEntityPopulationMechanism
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a>

---


### ChronicleWatchlistTimeoutsOutputReference <a name="ChronicleWatchlistTimeoutsOutputReference" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/chroniclewatchlist"

chroniclewatchlist.NewChronicleWatchlistTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChronicleWatchlistTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChronicleWatchlistWatchlistUserPreferencesOutputReference <a name="ChronicleWatchlistWatchlistUserPreferencesOutputReference" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/chroniclewatchlist"

chroniclewatchlist.NewChronicleWatchlistWatchlistUserPreferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChronicleWatchlistWatchlistUserPreferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.resetPinned">ResetPinned</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPinned` <a name="ResetPinned" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.resetPinned"></a>

```go
func ResetPinned()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinnedInput">PinnedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinned">Pinned</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PinnedInput`<sup>Optional</sup> <a name="PinnedInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinnedInput"></a>

```go
func PinnedInput() interface{}
```

- *Type:* interface{}

---

##### `Pinned`<sup>Required</sup> <a name="Pinned" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinned"></a>

```go
func Pinned() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() ChronicleWatchlistWatchlistUserPreferences
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a>

---



