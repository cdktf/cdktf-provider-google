# `dataplexEntry` Submodule <a name="`dataplexEntry` Submodule" id="@cdktf/provider-google.dataplexEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexEntry <a name="DataplexEntry" id="@cdktf/provider-google.dataplexEntry.DataplexEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry google_dataplex_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/dataplexentry"

dataplexentry.NewDataplexEntry(scope Construct, id *string, config DataplexEntryConfig) DataplexEntry
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig">DataplexEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig">DataplexEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.putAspects">PutAspects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.putEntrySource">PutEntrySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetAspects">ResetAspects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetEntryGroupId">ResetEntryGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetEntryId">ResetEntryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetEntrySource">ResetEntrySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetFullyQualifiedName">ResetFullyQualifiedName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetParentEntry">ResetParentEntry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAspects` <a name="PutAspects" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.putAspects"></a>

```go
func PutAspects(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.putAspects.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEntrySource` <a name="PutEntrySource" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.putEntrySource"></a>

```go
func PutEntrySource(value DataplexEntryEntrySource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.putEntrySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource">DataplexEntryEntrySource</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.putTimeouts"></a>

```go
func PutTimeouts(value DataplexEntryTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts">DataplexEntryTimeouts</a>

---

##### `ResetAspects` <a name="ResetAspects" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetAspects"></a>

```go
func ResetAspects()
```

##### `ResetEntryGroupId` <a name="ResetEntryGroupId" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetEntryGroupId"></a>

```go
func ResetEntryGroupId()
```

##### `ResetEntryId` <a name="ResetEntryId" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetEntryId"></a>

```go
func ResetEntryId()
```

##### `ResetEntrySource` <a name="ResetEntrySource" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetEntrySource"></a>

```go
func ResetEntrySource()
```

##### `ResetFullyQualifiedName` <a name="ResetFullyQualifiedName" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetFullyQualifiedName"></a>

```go
func ResetFullyQualifiedName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetParentEntry` <a name="ResetParentEntry" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetParentEntry"></a>

```go
func ResetParentEntry()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataplexEntry resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/dataplexentry"

dataplexentry.DataplexEntry_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/dataplexentry"

dataplexentry.DataplexEntry_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/dataplexentry"

dataplexentry.DataplexEntry_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/dataplexentry"

dataplexentry.DataplexEntry_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataplexEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataplexEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataplexEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataplexEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.aspects">Aspects</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList">DataplexEntryAspectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entrySource">EntrySource</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference">DataplexEntryEntrySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference">DataplexEntryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.aspectsInput">AspectsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryGroupIdInput">EntryGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryIdInput">EntryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entrySourceInput">EntrySourceInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource">DataplexEntryEntrySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryTypeInput">EntryTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.fullyQualifiedNameInput">FullyQualifiedNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.parentEntryInput">ParentEntryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryGroupId">EntryGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryId">EntryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryType">EntryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.parentEntry">ParentEntry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Aspects`<sup>Required</sup> <a name="Aspects" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.aspects"></a>

```go
func Aspects() DataplexEntryAspectsList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList">DataplexEntryAspectsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EntrySource`<sup>Required</sup> <a name="EntrySource" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entrySource"></a>

```go
func EntrySource() DataplexEntryEntrySourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference">DataplexEntryEntrySourceOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.timeouts"></a>

```go
func Timeouts() DataplexEntryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference">DataplexEntryTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AspectsInput`<sup>Optional</sup> <a name="AspectsInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.aspectsInput"></a>

```go
func AspectsInput() interface{}
```

- *Type:* interface{}

---

##### `EntryGroupIdInput`<sup>Optional</sup> <a name="EntryGroupIdInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryGroupIdInput"></a>

```go
func EntryGroupIdInput() *string
```

- *Type:* *string

---

##### `EntryIdInput`<sup>Optional</sup> <a name="EntryIdInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryIdInput"></a>

```go
func EntryIdInput() *string
```

- *Type:* *string

---

##### `EntrySourceInput`<sup>Optional</sup> <a name="EntrySourceInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entrySourceInput"></a>

```go
func EntrySourceInput() DataplexEntryEntrySource
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource">DataplexEntryEntrySource</a>

---

##### `EntryTypeInput`<sup>Optional</sup> <a name="EntryTypeInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryTypeInput"></a>

```go
func EntryTypeInput() *string
```

- *Type:* *string

---

##### `FullyQualifiedNameInput`<sup>Optional</sup> <a name="FullyQualifiedNameInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.fullyQualifiedNameInput"></a>

```go
func FullyQualifiedNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ParentEntryInput`<sup>Optional</sup> <a name="ParentEntryInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.parentEntryInput"></a>

```go
func ParentEntryInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `EntryGroupId`<sup>Required</sup> <a name="EntryGroupId" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryGroupId"></a>

```go
func EntryGroupId() *string
```

- *Type:* *string

---

##### `EntryId`<sup>Required</sup> <a name="EntryId" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryId"></a>

```go
func EntryId() *string
```

- *Type:* *string

---

##### `EntryType`<sup>Required</sup> <a name="EntryType" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryType"></a>

```go
func EntryType() *string
```

- *Type:* *string

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ParentEntry`<sup>Required</sup> <a name="ParentEntry" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.parentEntry"></a>

```go
func ParentEntry() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexEntryAspects <a name="DataplexEntryAspects" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspects.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/dataplexentry"

&dataplexentry.DataplexEntryAspects {
	Aspect: github.com/cdktf/cdktf-provider-google-go/google/v15.dataplexEntry.DataplexEntryAspectsAspect,
	AspectKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspects.property.aspect">Aspect</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect">DataplexEntryAspectsAspect</a></code> | aspect block. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspects.property.aspectKey">AspectKey</a></code> | <code>*string</code> | Depending on how the aspect is attached to the entry, the format of the aspect key can be one of the following:. |

---

##### `Aspect`<sup>Required</sup> <a name="Aspect" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspects.property.aspect"></a>

```go
Aspect DataplexEntryAspectsAspect
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect">DataplexEntryAspectsAspect</a>

aspect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#aspect DataplexEntry#aspect}

---

##### `AspectKey`<sup>Required</sup> <a name="AspectKey" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspects.property.aspectKey"></a>

```go
AspectKey *string
```

- *Type:* *string

Depending on how the aspect is attached to the entry, the format of the aspect key can be one of the following:.

If the aspect is attached directly to the entry: {project_number}.{locationId}.{aspectTypeId}
If the aspect is attached to an entry's path: {project_number}.{locationId}.{aspectTypeId}@{path}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#aspect_key DataplexEntry#aspect_key}

---

### DataplexEntryAspectsAspect <a name="DataplexEntryAspectsAspect" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/dataplexentry"

&dataplexentry.DataplexEntryAspectsAspect {
	Data: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect.property.data">Data</a></code> | <code>*string</code> | The content of the aspect in JSON form, according to its aspect type schema. |

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect.property.data"></a>

```go
Data *string
```

- *Type:* *string

The content of the aspect in JSON form, according to its aspect type schema.

The maximum size of the field is 120KB (encoded as UTF-8).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#data DataplexEntry#data}

---

### DataplexEntryConfig <a name="DataplexEntryConfig" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/dataplexentry"

&dataplexentry.DataplexEntryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EntryType: *string,
	Aspects: interface{},
	EntryGroupId: *string,
	EntryId: *string,
	EntrySource: github.com/cdktf/cdktf-provider-google-go/google/v15.dataplexEntry.DataplexEntryEntrySource,
	FullyQualifiedName: *string,
	Id: *string,
	Location: *string,
	ParentEntry: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v15.dataplexEntry.DataplexEntryTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.entryType">EntryType</a></code> | <code>*string</code> | The relative resource name of the entry type that was used to create this entry, in the format projects/{project_number}/locations/{locationId}/entryTypes/{entryTypeId}. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.aspects">Aspects</a></code> | <code>interface{}</code> | aspects block. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.entryGroupId">EntryGroupId</a></code> | <code>*string</code> | The entry group id of the entry group the entry will be created in. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.entryId">EntryId</a></code> | <code>*string</code> | The entry id of the entry. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.entrySource">EntrySource</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource">DataplexEntryEntrySource</a></code> | entry_source block. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | A name for the entry that can be referenced by an external system. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#id DataplexEntry#id}. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.location">Location</a></code> | <code>*string</code> | The location where entry will be created. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.parentEntry">ParentEntry</a></code> | <code>*string</code> | The resource name of the parent entry, in the format projects/{project_number}/locations/{locationId}/entryGroups/{entryGroupId}/entries/{entryId}. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#project DataplexEntry#project}. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts">DataplexEntryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EntryType`<sup>Required</sup> <a name="EntryType" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.entryType"></a>

```go
EntryType *string
```

- *Type:* *string

The relative resource name of the entry type that was used to create this entry, in the format projects/{project_number}/locations/{locationId}/entryTypes/{entryTypeId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#entry_type DataplexEntry#entry_type}

---

##### `Aspects`<sup>Optional</sup> <a name="Aspects" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.aspects"></a>

```go
Aspects interface{}
```

- *Type:* interface{}

aspects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#aspects DataplexEntry#aspects}

---

##### `EntryGroupId`<sup>Optional</sup> <a name="EntryGroupId" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.entryGroupId"></a>

```go
EntryGroupId *string
```

- *Type:* *string

The entry group id of the entry group the entry will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#entry_group_id DataplexEntry#entry_group_id}

---

##### `EntryId`<sup>Optional</sup> <a name="EntryId" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.entryId"></a>

```go
EntryId *string
```

- *Type:* *string

The entry id of the entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#entry_id DataplexEntry#entry_id}

---

##### `EntrySource`<sup>Optional</sup> <a name="EntrySource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.entrySource"></a>

```go
EntrySource DataplexEntryEntrySource
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource">DataplexEntryEntrySource</a>

entry_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#entry_source DataplexEntry#entry_source}

---

##### `FullyQualifiedName`<sup>Optional</sup> <a name="FullyQualifiedName" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.fullyQualifiedName"></a>

```go
FullyQualifiedName *string
```

- *Type:* *string

A name for the entry that can be referenced by an external system.

For more information, see https://cloud.google.com/dataplex/docs/fully-qualified-names.
The maximum size of the field is 4000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#fully_qualified_name DataplexEntry#fully_qualified_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#id DataplexEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location where entry will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#location DataplexEntry#location}

---

##### `ParentEntry`<sup>Optional</sup> <a name="ParentEntry" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.parentEntry"></a>

```go
ParentEntry *string
```

- *Type:* *string

The resource name of the parent entry, in the format projects/{project_number}/locations/{locationId}/entryGroups/{entryGroupId}/entries/{entryId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#parent_entry DataplexEntry#parent_entry}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#project DataplexEntry#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.timeouts"></a>

```go
Timeouts DataplexEntryTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts">DataplexEntryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#timeouts DataplexEntry#timeouts}

---

### DataplexEntryEntrySource <a name="DataplexEntryEntrySource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/dataplexentry"

&dataplexentry.DataplexEntryEntrySource {
	Ancestors: interface{},
	CreateTime: *string,
	Description: *string,
	DisplayName: *string,
	Labels: *map[string]*string,
	Platform: *string,
	Resource: *string,
	SystemAttribute: *string,
	UpdateTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.ancestors">Ancestors</a></code> | <code>interface{}</code> | ancestors block. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.createTime">CreateTime</a></code> | <code>*string</code> | The time when the resource was created in the source system. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.description">Description</a></code> | <code>*string</code> | A description of the data resource. Maximum length is 2,000 characters. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.displayName">DisplayName</a></code> | <code>*string</code> | A user-friendly display name. Maximum length is 500 characters. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.labels">Labels</a></code> | <code>*map[string]*string</code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.platform">Platform</a></code> | <code>*string</code> | The platform containing the source system. Maximum length is 64 characters. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.resource">Resource</a></code> | <code>*string</code> | The name of the resource in the source system. Maximum length is 4,000 characters. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.systemAttribute">SystemAttribute</a></code> | <code>*string</code> | The name of the source system. Maximum length is 64 characters. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.updateTime">UpdateTime</a></code> | <code>*string</code> | The time when the resource was last updated in the source system. |

---

##### `Ancestors`<sup>Optional</sup> <a name="Ancestors" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.ancestors"></a>

```go
Ancestors interface{}
```

- *Type:* interface{}

ancestors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#ancestors DataplexEntry#ancestors}

---

##### `CreateTime`<sup>Optional</sup> <a name="CreateTime" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.createTime"></a>

```go
CreateTime *string
```

- *Type:* *string

The time when the resource was created in the source system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#create_time DataplexEntry#create_time}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the data resource. Maximum length is 2,000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#description DataplexEntry#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

A user-friendly display name. Maximum length is 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#display_name DataplexEntry#display_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

User-defined labels.

The maximum size of keys and values is 128 characters each.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#labels DataplexEntry#labels}

---

##### `Platform`<sup>Optional</sup> <a name="Platform" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.platform"></a>

```go
Platform *string
```

- *Type:* *string

The platform containing the source system. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#platform DataplexEntry#platform}

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

The name of the resource in the source system. Maximum length is 4,000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#resource DataplexEntry#resource}

---

##### `SystemAttribute`<sup>Optional</sup> <a name="SystemAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.systemAttribute"></a>

```go
SystemAttribute *string
```

- *Type:* *string

The name of the source system. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#system DataplexEntry#system}

---

##### `UpdateTime`<sup>Optional</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.updateTime"></a>

```go
UpdateTime *string
```

- *Type:* *string

The time when the resource was last updated in the source system.

If the entry exists in the system and its EntrySource has updateTime populated,
further updates to the EntrySource of the entry must provide incremental updates to its updateTime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#update_time DataplexEntry#update_time}

---

### DataplexEntryEntrySourceAncestors <a name="DataplexEntryEntrySourceAncestors" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/dataplexentry"

&dataplexentry.DataplexEntryEntrySourceAncestors {
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestors.property.name">Name</a></code> | <code>*string</code> | The name of the ancestor resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestors.property.type">Type</a></code> | <code>*string</code> | The type of the ancestor resource. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestors.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the ancestor resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#name DataplexEntry#name}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestors.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the ancestor resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#type DataplexEntry#type}

---

### DataplexEntryTimeouts <a name="DataplexEntryTimeouts" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/dataplexentry"

&dataplexentry.DataplexEntryTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#create DataplexEntry#create}. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#delete DataplexEntry#delete}. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#update DataplexEntry#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#create DataplexEntry#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#delete DataplexEntry#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/dataplex_entry#update DataplexEntry#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexEntryAspectsAspectOutputReference <a name="DataplexEntryAspectsAspectOutputReference" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/dataplexentry"

dataplexentry.NewDataplexEntryAspectsAspectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexEntryAspectsAspectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.aspectType">AspectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.dataInput">DataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.data">Data</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect">DataplexEntryAspectsAspect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AspectType`<sup>Required</sup> <a name="AspectType" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.aspectType"></a>

```go
func AspectType() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.dataInput"></a>

```go
func DataInput() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.data"></a>

```go
func Data() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexEntryAspectsAspect
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect">DataplexEntryAspectsAspect</a>

---


### DataplexEntryAspectsList <a name="DataplexEntryAspectsList" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/dataplexentry"

dataplexentry.NewDataplexEntryAspectsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexEntryAspectsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.get"></a>

```go
func Get(index *f64) DataplexEntryAspectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataplexEntryAspectsOutputReference <a name="DataplexEntryAspectsOutputReference" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/dataplexentry"

dataplexentry.NewDataplexEntryAspectsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexEntryAspectsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.putAspect">PutAspect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAspect` <a name="PutAspect" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.putAspect"></a>

```go
func PutAspect(value DataplexEntryAspectsAspect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.putAspect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect">DataplexEntryAspectsAspect</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.aspect">Aspect</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference">DataplexEntryAspectsAspectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.aspectInput">AspectInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect">DataplexEntryAspectsAspect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.aspectKeyInput">AspectKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.aspectKey">AspectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Aspect`<sup>Required</sup> <a name="Aspect" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.aspect"></a>

```go
func Aspect() DataplexEntryAspectsAspectOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference">DataplexEntryAspectsAspectOutputReference</a>

---

##### `AspectInput`<sup>Optional</sup> <a name="AspectInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.aspectInput"></a>

```go
func AspectInput() DataplexEntryAspectsAspect
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect">DataplexEntryAspectsAspect</a>

---

##### `AspectKeyInput`<sup>Optional</sup> <a name="AspectKeyInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.aspectKeyInput"></a>

```go
func AspectKeyInput() *string
```

- *Type:* *string

---

##### `AspectKey`<sup>Required</sup> <a name="AspectKey" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.aspectKey"></a>

```go
func AspectKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataplexEntryEntrySourceAncestorsList <a name="DataplexEntryEntrySourceAncestorsList" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/dataplexentry"

dataplexentry.NewDataplexEntryEntrySourceAncestorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexEntryEntrySourceAncestorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.get"></a>

```go
func Get(index *f64) DataplexEntryEntrySourceAncestorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataplexEntryEntrySourceAncestorsOutputReference <a name="DataplexEntryEntrySourceAncestorsOutputReference" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/dataplexentry"

dataplexentry.NewDataplexEntryEntrySourceAncestorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexEntryEntrySourceAncestorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataplexEntryEntrySourceOutputReference <a name="DataplexEntryEntrySourceOutputReference" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/dataplexentry"

dataplexentry.NewDataplexEntryEntrySourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexEntryEntrySourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.putAncestors">PutAncestors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetAncestors">ResetAncestors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetCreateTime">ResetCreateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetPlatform">ResetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetResource">ResetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetSystemAttribute">ResetSystemAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetUpdateTime">ResetUpdateTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAncestors` <a name="PutAncestors" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.putAncestors"></a>

```go
func PutAncestors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.putAncestors.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAncestors` <a name="ResetAncestors" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetAncestors"></a>

```go
func ResetAncestors()
```

##### `ResetCreateTime` <a name="ResetCreateTime" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetCreateTime"></a>

```go
func ResetCreateTime()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetPlatform` <a name="ResetPlatform" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetPlatform"></a>

```go
func ResetPlatform()
```

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetResource"></a>

```go
func ResetResource()
```

##### `ResetSystemAttribute` <a name="ResetSystemAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetSystemAttribute"></a>

```go
func ResetSystemAttribute()
```

##### `ResetUpdateTime` <a name="ResetUpdateTime" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetUpdateTime"></a>

```go
func ResetUpdateTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.ancestors">Ancestors</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList">DataplexEntryEntrySourceAncestorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.ancestorsInput">AncestorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.createTimeInput">CreateTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.platformInput">PlatformInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.systemAttributeInput">SystemAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.updateTimeInput">UpdateTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.systemAttribute">SystemAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource">DataplexEntryEntrySource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ancestors`<sup>Required</sup> <a name="Ancestors" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.ancestors"></a>

```go
func Ancestors() DataplexEntryEntrySourceAncestorsList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList">DataplexEntryEntrySourceAncestorsList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `AncestorsInput`<sup>Optional</sup> <a name="AncestorsInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.ancestorsInput"></a>

```go
func AncestorsInput() interface{}
```

- *Type:* interface{}

---

##### `CreateTimeInput`<sup>Optional</sup> <a name="CreateTimeInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.createTimeInput"></a>

```go
func CreateTimeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.platformInput"></a>

```go
func PlatformInput() *string
```

- *Type:* *string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `SystemAttributeInput`<sup>Optional</sup> <a name="SystemAttributeInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.systemAttributeInput"></a>

```go
func SystemAttributeInput() *string
```

- *Type:* *string

---

##### `UpdateTimeInput`<sup>Optional</sup> <a name="UpdateTimeInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.updateTimeInput"></a>

```go
func UpdateTimeInput() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `SystemAttribute`<sup>Required</sup> <a name="SystemAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.systemAttribute"></a>

```go
func SystemAttribute() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexEntryEntrySource
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource">DataplexEntryEntrySource</a>

---


### DataplexEntryTimeoutsOutputReference <a name="DataplexEntryTimeoutsOutputReference" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/dataplexentry"

dataplexentry.NewDataplexEntryTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexEntryTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



