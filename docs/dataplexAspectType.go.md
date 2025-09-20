# `dataplexAspectType` Submodule <a name="`dataplexAspectType` Submodule" id="@cdktf/provider-google.dataplexAspectType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexAspectType <a name="DataplexAspectType" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_aspect_type google_dataplex_aspect_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexaspecttype"

dataplexaspecttype.NewDataplexAspectType(scope Construct, id *string, config DataplexAspectTypeConfig) DataplexAspectType
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig">DataplexAspectTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig">DataplexAspectTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.resetAspectTypeId">ResetAspectTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.resetMetadataTemplate">ResetMetadataTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.putTimeouts"></a>

```go
func PutTimeouts(value DataplexAspectTypeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeouts">DataplexAspectTypeTimeouts</a>

---

##### `ResetAspectTypeId` <a name="ResetAspectTypeId" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.resetAspectTypeId"></a>

```go
func ResetAspectTypeId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetMetadataTemplate` <a name="ResetMetadataTemplate" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.resetMetadataTemplate"></a>

```go
func ResetMetadataTemplate()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataplexAspectType resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexaspecttype"

dataplexaspecttype.DataplexAspectType_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexaspecttype"

dataplexaspecttype.DataplexAspectType_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexaspecttype"

dataplexaspecttype.DataplexAspectType_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexaspecttype"

dataplexaspecttype.DataplexAspectType_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataplexAspectType resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataplexAspectType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataplexAspectType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_aspect_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataplexAspectType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference">DataplexAspectTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.transferStatus">TransferStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.aspectTypeIdInput">AspectTypeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.metadataTemplateInput">MetadataTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.aspectTypeId">AspectTypeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.metadataTemplate">MetadataTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.timeouts"></a>

```go
func Timeouts() DataplexAspectTypeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference">DataplexAspectTypeTimeoutsOutputReference</a>

---

##### `TransferStatus`<sup>Required</sup> <a name="TransferStatus" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.transferStatus"></a>

```go
func TransferStatus() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AspectTypeIdInput`<sup>Optional</sup> <a name="AspectTypeIdInput" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.aspectTypeIdInput"></a>

```go
func AspectTypeIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MetadataTemplateInput`<sup>Optional</sup> <a name="MetadataTemplateInput" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.metadataTemplateInput"></a>

```go
func MetadataTemplateInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AspectTypeId`<sup>Required</sup> <a name="AspectTypeId" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.aspectTypeId"></a>

```go
func AspectTypeId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MetadataTemplate`<sup>Required</sup> <a name="MetadataTemplate" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.metadataTemplate"></a>

```go
func MetadataTemplate() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectType.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexAspectTypeConfig <a name="DataplexAspectTypeConfig" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexaspecttype"

&dataplexaspecttype.DataplexAspectTypeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AspectTypeId: *string,
	Description: *string,
	DisplayName: *string,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	MetadataTemplate: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexAspectType.DataplexAspectTypeTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.aspectTypeId">AspectTypeId</a></code> | <code>*string</code> | The aspect type id of the aspect type. |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.description">Description</a></code> | <code>*string</code> | Description of the AspectType. |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User friendly display name. |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_aspect_type#id DataplexAspectType#id}. |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | User-defined labels for the AspectType. |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.location">Location</a></code> | <code>*string</code> | The location where aspect type will be created in. |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.metadataTemplate">MetadataTemplate</a></code> | <code>*string</code> | MetadataTemplate of the Aspect. |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_aspect_type#project DataplexAspectType#project}. |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeouts">DataplexAspectTypeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AspectTypeId`<sup>Optional</sup> <a name="AspectTypeId" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.aspectTypeId"></a>

```go
AspectTypeId *string
```

- *Type:* *string

The aspect type id of the aspect type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_aspect_type#aspect_type_id DataplexAspectType#aspect_type_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the AspectType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_aspect_type#description DataplexAspectType#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_aspect_type#display_name DataplexAspectType#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_aspect_type#id DataplexAspectType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

User-defined labels for the AspectType.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_aspect_type#labels DataplexAspectType#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location where aspect type will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_aspect_type#location DataplexAspectType#location}

---

##### `MetadataTemplate`<sup>Optional</sup> <a name="MetadataTemplate" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.metadataTemplate"></a>

```go
MetadataTemplate *string
```

- *Type:* *string

MetadataTemplate of the Aspect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_aspect_type#metadata_template DataplexAspectType#metadata_template}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_aspect_type#project DataplexAspectType#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeConfig.property.timeouts"></a>

```go
Timeouts DataplexAspectTypeTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeouts">DataplexAspectTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_aspect_type#timeouts DataplexAspectType#timeouts}

---

### DataplexAspectTypeTimeouts <a name="DataplexAspectTypeTimeouts" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexaspecttype"

&dataplexaspecttype.DataplexAspectTypeTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_aspect_type#create DataplexAspectType#create}. |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_aspect_type#delete DataplexAspectType#delete}. |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_aspect_type#update DataplexAspectType#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_aspect_type#create DataplexAspectType#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_aspect_type#delete DataplexAspectType#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_aspect_type#update DataplexAspectType#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexAspectTypeTimeoutsOutputReference <a name="DataplexAspectTypeTimeoutsOutputReference" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexaspecttype"

dataplexaspecttype.NewDataplexAspectTypeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexAspectTypeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexAspectType.DataplexAspectTypeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



