# `chronicleRetrohunt` Submodule <a name="`chronicleRetrohunt` Submodule" id="@cdktf/provider-google.chronicleRetrohunt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleRetrohunt <a name="ChronicleRetrohunt" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_retrohunt google_chronicle_retrohunt}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chronicleretrohunt"

chronicleretrohunt.NewChronicleRetrohunt(scope Construct, id *string, config ChronicleRetrohuntConfig) ChronicleRetrohunt
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig">ChronicleRetrohuntConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig">ChronicleRetrohuntConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.putProcessInterval">PutProcessInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetRetrohunt">ResetRetrohunt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProcessInterval` <a name="PutProcessInterval" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.putProcessInterval"></a>

```go
func PutProcessInterval(value ChronicleRetrohuntProcessInterval)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.putProcessInterval.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.putTimeouts"></a>

```go
func PutTimeouts(value ChronicleRetrohuntTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts">ChronicleRetrohuntTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRetrohunt` <a name="ResetRetrohunt" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetRetrohunt"></a>

```go
func ResetRetrohunt()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ChronicleRetrohunt resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chronicleretrohunt"

chronicleretrohunt.ChronicleRetrohunt_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chronicleretrohunt"

chronicleretrohunt.ChronicleRetrohunt_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chronicleretrohunt"

chronicleretrohunt.ChronicleRetrohunt_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chronicleretrohunt"

chronicleretrohunt.ChronicleRetrohunt_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ChronicleRetrohunt resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ChronicleRetrohunt to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ChronicleRetrohunt that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_retrohunt#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ChronicleRetrohunt to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.executionInterval">ExecutionInterval</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList">ChronicleRetrohuntExecutionIntervalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.processInterval">ProcessInterval</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference">ChronicleRetrohuntProcessIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.progressPercentage">ProgressPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference">ChronicleRetrohuntTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.processIntervalInput">ProcessIntervalInput</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.retrohuntInput">RetrohuntInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.ruleInput">RuleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.retrohunt">Retrohunt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.rule">Rule</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExecutionInterval`<sup>Required</sup> <a name="ExecutionInterval" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.executionInterval"></a>

```go
func ExecutionInterval() ChronicleRetrohuntExecutionIntervalList
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList">ChronicleRetrohuntExecutionIntervalList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProcessInterval`<sup>Required</sup> <a name="ProcessInterval" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.processInterval"></a>

```go
func ProcessInterval() ChronicleRetrohuntProcessIntervalOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference">ChronicleRetrohuntProcessIntervalOutputReference</a>

---

##### `ProgressPercentage`<sup>Required</sup> <a name="ProgressPercentage" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.progressPercentage"></a>

```go
func ProgressPercentage() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.timeouts"></a>

```go
func Timeouts() ChronicleRetrohuntTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference">ChronicleRetrohuntTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProcessIntervalInput`<sup>Optional</sup> <a name="ProcessIntervalInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.processIntervalInput"></a>

```go
func ProcessIntervalInput() ChronicleRetrohuntProcessInterval
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RetrohuntInput`<sup>Optional</sup> <a name="RetrohuntInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.retrohuntInput"></a>

```go
func RetrohuntInput() *string
```

- *Type:* *string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.ruleInput"></a>

```go
func RuleInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Retrohunt`<sup>Required</sup> <a name="Retrohunt" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.retrohunt"></a>

```go
func Retrohunt() *string
```

- *Type:* *string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.rule"></a>

```go
func Rule() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleRetrohuntConfig <a name="ChronicleRetrohuntConfig" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chronicleretrohunt"

&chronicleretrohunt.ChronicleRetrohuntConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Instance: *string,
	Location: *string,
	ProcessInterval: github.com/cdktf/cdktf-provider-google-go/google/v14.chronicleRetrohunt.ChronicleRetrohuntProcessInterval,
	Rule: *string,
	Id: *string,
	Project: *string,
	Retrohunt: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.chronicleRetrohunt.ChronicleRetrohuntTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.instance">Instance</a></code> | <code>*string</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.location">Location</a></code> | <code>*string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.processInterval">ProcessInterval</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a></code> | process_interval block. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.rule">Rule</a></code> | <code>*string</code> | The Rule ID of the rule. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_retrohunt#id ChronicleRetrohunt#id}. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_retrohunt#project ChronicleRetrohunt#project}. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.retrohunt">Retrohunt</a></code> | <code>*string</code> | The retrohunt ID of the Retrohunt. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts">ChronicleRetrohuntTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_retrohunt#instance ChronicleRetrohunt#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_retrohunt#location ChronicleRetrohunt#location}

---

##### `ProcessInterval`<sup>Required</sup> <a name="ProcessInterval" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.processInterval"></a>

```go
ProcessInterval ChronicleRetrohuntProcessInterval
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a>

process_interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_retrohunt#process_interval ChronicleRetrohunt#process_interval}

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.rule"></a>

```go
Rule *string
```

- *Type:* *string

The Rule ID of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_retrohunt#rule ChronicleRetrohunt#rule}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_retrohunt#id ChronicleRetrohunt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_retrohunt#project ChronicleRetrohunt#project}.

---

##### `Retrohunt`<sup>Optional</sup> <a name="Retrohunt" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.retrohunt"></a>

```go
Retrohunt *string
```

- *Type:* *string

The retrohunt ID of the Retrohunt.

A retrohunt is an execution of a Rule over a time range in the past.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_retrohunt#retrohunt ChronicleRetrohunt#retrohunt}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.timeouts"></a>

```go
Timeouts ChronicleRetrohuntTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts">ChronicleRetrohuntTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_retrohunt#timeouts ChronicleRetrohunt#timeouts}

---

### ChronicleRetrohuntExecutionInterval <a name="ChronicleRetrohuntExecutionInterval" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionInterval"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionInterval.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chronicleretrohunt"

&chronicleretrohunt.ChronicleRetrohuntExecutionInterval {

}
```


### ChronicleRetrohuntProcessInterval <a name="ChronicleRetrohuntProcessInterval" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chronicleretrohunt"

&chronicleretrohunt.ChronicleRetrohuntProcessInterval {
	EndTime: *string,
	StartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval.property.endTime">EndTime</a></code> | <code>*string</code> | Exclusive end of the interval. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval.property.startTime">StartTime</a></code> | <code>*string</code> | Inclusive start of the interval. |

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

Exclusive end of the interval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_retrohunt#end_time ChronicleRetrohunt#end_time}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Inclusive start of the interval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_retrohunt#start_time ChronicleRetrohunt#start_time}

---

### ChronicleRetrohuntTimeouts <a name="ChronicleRetrohuntTimeouts" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chronicleretrohunt"

&chronicleretrohunt.ChronicleRetrohuntTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_retrohunt#create ChronicleRetrohunt#create}. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_retrohunt#delete ChronicleRetrohunt#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_retrohunt#create ChronicleRetrohunt#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_retrohunt#delete ChronicleRetrohunt#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleRetrohuntExecutionIntervalList <a name="ChronicleRetrohuntExecutionIntervalList" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chronicleretrohunt"

chronicleretrohunt.NewChronicleRetrohuntExecutionIntervalList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChronicleRetrohuntExecutionIntervalList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.get"></a>

```go
func Get(index *f64) ChronicleRetrohuntExecutionIntervalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ChronicleRetrohuntExecutionIntervalOutputReference <a name="ChronicleRetrohuntExecutionIntervalOutputReference" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chronicleretrohunt"

chronicleretrohunt.NewChronicleRetrohuntExecutionIntervalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChronicleRetrohuntExecutionIntervalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionInterval">ChronicleRetrohuntExecutionInterval</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.internalValue"></a>

```go
func InternalValue() ChronicleRetrohuntExecutionInterval
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionInterval">ChronicleRetrohuntExecutionInterval</a>

---


### ChronicleRetrohuntProcessIntervalOutputReference <a name="ChronicleRetrohuntProcessIntervalOutputReference" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chronicleretrohunt"

chronicleretrohunt.NewChronicleRetrohuntProcessIntervalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChronicleRetrohuntProcessIntervalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.internalValue"></a>

```go
func InternalValue() ChronicleRetrohuntProcessInterval
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a>

---


### ChronicleRetrohuntTimeoutsOutputReference <a name="ChronicleRetrohuntTimeoutsOutputReference" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chronicleretrohunt"

chronicleretrohunt.NewChronicleRetrohuntTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChronicleRetrohuntTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



