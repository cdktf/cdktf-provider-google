# `bigtableAuthorizedView` Submodule <a name="`bigtableAuthorizedView` Submodule" id="@cdktf/provider-google.bigtableAuthorizedView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigtableAuthorizedView <a name="BigtableAuthorizedView" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigtable_authorized_view google_bigtable_authorized_view}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigtableauthorizedview"

bigtableauthorizedview.NewBigtableAuthorizedView(scope Construct, id *string, config BigtableAuthorizedViewConfig) BigtableAuthorizedView
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig">BigtableAuthorizedViewConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig">BigtableAuthorizedViewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.putSubsetView">PutSubsetView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetSubsetView">ResetSubsetView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSubsetView` <a name="PutSubsetView" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.putSubsetView"></a>

```go
func PutSubsetView(value BigtableAuthorizedViewSubsetView)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.putSubsetView.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.putTimeouts"></a>

```go
func PutTimeouts(value BigtableAuthorizedViewTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts">BigtableAuthorizedViewTimeouts</a>

---

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSubsetView` <a name="ResetSubsetView" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetSubsetView"></a>

```go
func ResetSubsetView()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BigtableAuthorizedView resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigtableauthorizedview"

bigtableauthorizedview.BigtableAuthorizedView_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigtableauthorizedview"

bigtableauthorizedview.BigtableAuthorizedView_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigtableauthorizedview"

bigtableauthorizedview.BigtableAuthorizedView_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigtableauthorizedview"

bigtableauthorizedview.BigtableAuthorizedView_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BigtableAuthorizedView resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BigtableAuthorizedView to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BigtableAuthorizedView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigtable_authorized_view#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BigtableAuthorizedView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.subsetView">SubsetView</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference">BigtableAuthorizedViewSubsetViewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference">BigtableAuthorizedViewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.instanceNameInput">InstanceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.subsetViewInput">SubsetViewInput</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.deletionProtection">DeletionProtection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.instanceName">InstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SubsetView`<sup>Required</sup> <a name="SubsetView" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.subsetView"></a>

```go
func SubsetView() BigtableAuthorizedViewSubsetViewOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference">BigtableAuthorizedViewSubsetViewOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.timeouts"></a>

```go
func Timeouts() BigtableAuthorizedViewTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference">BigtableAuthorizedViewTimeoutsOutputReference</a>

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.instanceNameInput"></a>

```go
func InstanceNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SubsetViewInput`<sup>Optional</sup> <a name="SubsetViewInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.subsetViewInput"></a>

```go
func SubsetViewInput() BigtableAuthorizedViewSubsetView
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a>

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.deletionProtection"></a>

```go
func DeletionProtection() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.instanceName"></a>

```go
func InstanceName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BigtableAuthorizedViewConfig <a name="BigtableAuthorizedViewConfig" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigtableauthorizedview"

&bigtableauthorizedview.BigtableAuthorizedViewConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceName: *string,
	Name: *string,
	TableName: *string,
	DeletionProtection: *string,
	Id: *string,
	Project: *string,
	SubsetView: github.com/cdktf/cdktf-provider-google-go/google/v13.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v13.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.instanceName">InstanceName</a></code> | <code>*string</code> | The name of the Bigtable instance in which the authorized view belongs. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.name">Name</a></code> | <code>*string</code> | The name of the authorized view. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.tableName">TableName</a></code> | <code>*string</code> | The name of the Bigtable table in which the authorized view belongs. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.deletionProtection">DeletionProtection</a></code> | <code>*string</code> | A field to make the authorized view protected against data loss i.e. when set to PROTECTED, deleting the authorized view, the table containing the authorized view, and the instance containing the authorized view would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value. Note this field configs the deletion protection provided by the API in the backend, and should not be confused with Terraform-side deletion protection. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigtable_authorized_view#id BigtableAuthorizedView#id}. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.subsetView">SubsetView</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a></code> | subset_view block. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts">BigtableAuthorizedViewTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.instanceName"></a>

```go
InstanceName *string
```

- *Type:* *string

The name of the Bigtable instance in which the authorized view belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigtable_authorized_view#instance_name BigtableAuthorizedView#instance_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the authorized view.

Must be 1-50 characters and must only contain hyphens, underscores, periods, letters and numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigtable_authorized_view#name BigtableAuthorizedView#name}

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

The name of the Bigtable table in which the authorized view belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigtable_authorized_view#table_name BigtableAuthorizedView#table_name}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.deletionProtection"></a>

```go
DeletionProtection *string
```

- *Type:* *string

A field to make the authorized view protected against data loss i.e. when set to PROTECTED, deleting the authorized view, the table containing the authorized view, and the instance containing the authorized view would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value. Note this field configs the deletion protection provided by the API in the backend, and should not be confused with Terraform-side deletion protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigtable_authorized_view#deletion_protection BigtableAuthorizedView#deletion_protection}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigtable_authorized_view#id BigtableAuthorizedView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigtable_authorized_view#project BigtableAuthorizedView#project}

---

##### `SubsetView`<sup>Optional</sup> <a name="SubsetView" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.subsetView"></a>

```go
SubsetView BigtableAuthorizedViewSubsetView
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a>

subset_view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigtable_authorized_view#subset_view BigtableAuthorizedView#subset_view}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.timeouts"></a>

```go
Timeouts BigtableAuthorizedViewTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts">BigtableAuthorizedViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigtable_authorized_view#timeouts BigtableAuthorizedView#timeouts}

---

### BigtableAuthorizedViewSubsetView <a name="BigtableAuthorizedViewSubsetView" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigtableauthorizedview"

&bigtableauthorizedview.BigtableAuthorizedViewSubsetView {
	FamilySubsets: interface{},
	RowPrefixes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView.property.familySubsets">FamilySubsets</a></code> | <code>interface{}</code> | family_subsets block. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView.property.rowPrefixes">RowPrefixes</a></code> | <code>*[]*string</code> | Base64-encoded row prefixes to be included in the authorized view. |

---

##### `FamilySubsets`<sup>Optional</sup> <a name="FamilySubsets" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView.property.familySubsets"></a>

```go
FamilySubsets interface{}
```

- *Type:* interface{}

family_subsets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigtable_authorized_view#family_subsets BigtableAuthorizedView#family_subsets}

---

##### `RowPrefixes`<sup>Optional</sup> <a name="RowPrefixes" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView.property.rowPrefixes"></a>

```go
RowPrefixes *[]*string
```

- *Type:* *[]*string

Base64-encoded row prefixes to be included in the authorized view.

To provide access to all rows, include the empty string as a prefix ("").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigtable_authorized_view#row_prefixes BigtableAuthorizedView#row_prefixes}

---

### BigtableAuthorizedViewSubsetViewFamilySubsets <a name="BigtableAuthorizedViewSubsetViewFamilySubsets" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigtableauthorizedview"

&bigtableauthorizedview.BigtableAuthorizedViewSubsetViewFamilySubsets {
	FamilyName: *string,
	QualifierPrefixes: *[]*string,
	Qualifiers: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets.property.familyName">FamilyName</a></code> | <code>*string</code> | Name of the column family to be included in the authorized view. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets.property.qualifierPrefixes">QualifierPrefixes</a></code> | <code>*[]*string</code> | Base64-encoded prefixes for qualifiers of the column family to be included in the authorized view. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets.property.qualifiers">Qualifiers</a></code> | <code>*[]*string</code> | Base64-encoded individual exact column qualifiers of the column family to be included in the authorized view. |

---

##### `FamilyName`<sup>Required</sup> <a name="FamilyName" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets.property.familyName"></a>

```go
FamilyName *string
```

- *Type:* *string

Name of the column family to be included in the authorized view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigtable_authorized_view#family_name BigtableAuthorizedView#family_name}

---

##### `QualifierPrefixes`<sup>Optional</sup> <a name="QualifierPrefixes" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets.property.qualifierPrefixes"></a>

```go
QualifierPrefixes *[]*string
```

- *Type:* *[]*string

Base64-encoded prefixes for qualifiers of the column family to be included in the authorized view.

Every qualifier starting with one of these prefixes is included in the authorized view. To provide access to all qualifiers, include the empty string as a prefix ("").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigtable_authorized_view#qualifier_prefixes BigtableAuthorizedView#qualifier_prefixes}

---

##### `Qualifiers`<sup>Optional</sup> <a name="Qualifiers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets.property.qualifiers"></a>

```go
Qualifiers *[]*string
```

- *Type:* *[]*string

Base64-encoded individual exact column qualifiers of the column family to be included in the authorized view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigtable_authorized_view#qualifiers BigtableAuthorizedView#qualifiers}

---

### BigtableAuthorizedViewTimeouts <a name="BigtableAuthorizedViewTimeouts" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigtableauthorizedview"

&bigtableauthorizedview.BigtableAuthorizedViewTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigtable_authorized_view#create BigtableAuthorizedView#create}. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigtable_authorized_view#update BigtableAuthorizedView#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigtable_authorized_view#create BigtableAuthorizedView#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/bigtable_authorized_view#update BigtableAuthorizedView#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigtableAuthorizedViewSubsetViewFamilySubsetsList <a name="BigtableAuthorizedViewSubsetViewFamilySubsetsList" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigtableauthorizedview"

bigtableauthorizedview.NewBigtableAuthorizedViewSubsetViewFamilySubsetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BigtableAuthorizedViewSubsetViewFamilySubsetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.get"></a>

```go
func Get(index *f64) BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference <a name="BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigtableauthorizedview"

bigtableauthorizedview.NewBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resetQualifierPrefixes">ResetQualifierPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resetQualifiers">ResetQualifiers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQualifierPrefixes` <a name="ResetQualifierPrefixes" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resetQualifierPrefixes"></a>

```go
func ResetQualifierPrefixes()
```

##### `ResetQualifiers` <a name="ResetQualifiers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resetQualifiers"></a>

```go
func ResetQualifiers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.familyNameInput">FamilyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifierPrefixesInput">QualifierPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifiersInput">QualifiersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.familyName">FamilyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifierPrefixes">QualifierPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifiers">Qualifiers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FamilyNameInput`<sup>Optional</sup> <a name="FamilyNameInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.familyNameInput"></a>

```go
func FamilyNameInput() *string
```

- *Type:* *string

---

##### `QualifierPrefixesInput`<sup>Optional</sup> <a name="QualifierPrefixesInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifierPrefixesInput"></a>

```go
func QualifierPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `QualifiersInput`<sup>Optional</sup> <a name="QualifiersInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifiersInput"></a>

```go
func QualifiersInput() *[]*string
```

- *Type:* *[]*string

---

##### `FamilyName`<sup>Required</sup> <a name="FamilyName" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.familyName"></a>

```go
func FamilyName() *string
```

- *Type:* *string

---

##### `QualifierPrefixes`<sup>Required</sup> <a name="QualifierPrefixes" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifierPrefixes"></a>

```go
func QualifierPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `Qualifiers`<sup>Required</sup> <a name="Qualifiers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifiers"></a>

```go
func Qualifiers() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BigtableAuthorizedViewSubsetViewOutputReference <a name="BigtableAuthorizedViewSubsetViewOutputReference" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigtableauthorizedview"

bigtableauthorizedview.NewBigtableAuthorizedViewSubsetViewOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigtableAuthorizedViewSubsetViewOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.putFamilySubsets">PutFamilySubsets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.resetFamilySubsets">ResetFamilySubsets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.resetRowPrefixes">ResetRowPrefixes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFamilySubsets` <a name="PutFamilySubsets" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.putFamilySubsets"></a>

```go
func PutFamilySubsets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.putFamilySubsets.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFamilySubsets` <a name="ResetFamilySubsets" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.resetFamilySubsets"></a>

```go
func ResetFamilySubsets()
```

##### `ResetRowPrefixes` <a name="ResetRowPrefixes" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.resetRowPrefixes"></a>

```go
func ResetRowPrefixes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.familySubsets">FamilySubsets</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList">BigtableAuthorizedViewSubsetViewFamilySubsetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.familySubsetsInput">FamilySubsetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.rowPrefixesInput">RowPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.rowPrefixes">RowPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FamilySubsets`<sup>Required</sup> <a name="FamilySubsets" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.familySubsets"></a>

```go
func FamilySubsets() BigtableAuthorizedViewSubsetViewFamilySubsetsList
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList">BigtableAuthorizedViewSubsetViewFamilySubsetsList</a>

---

##### `FamilySubsetsInput`<sup>Optional</sup> <a name="FamilySubsetsInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.familySubsetsInput"></a>

```go
func FamilySubsetsInput() interface{}
```

- *Type:* interface{}

---

##### `RowPrefixesInput`<sup>Optional</sup> <a name="RowPrefixesInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.rowPrefixesInput"></a>

```go
func RowPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RowPrefixes`<sup>Required</sup> <a name="RowPrefixes" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.rowPrefixes"></a>

```go
func RowPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.internalValue"></a>

```go
func InternalValue() BigtableAuthorizedViewSubsetView
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a>

---


### BigtableAuthorizedViewTimeoutsOutputReference <a name="BigtableAuthorizedViewTimeoutsOutputReference" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigtableauthorizedview"

bigtableauthorizedview.NewBigtableAuthorizedViewTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigtableAuthorizedViewTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



