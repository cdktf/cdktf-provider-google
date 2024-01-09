# `documentAiWarehouseDocumentSchema` Submodule <a name="`documentAiWarehouseDocumentSchema` Submodule" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocumentAiWarehouseDocumentSchema <a name="DocumentAiWarehouseDocumentSchema" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema google_document_ai_warehouse_document_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

documentaiwarehousedocumentschema.NewDocumentAiWarehouseDocumentSchema(scope Construct, id *string, config DocumentAiWarehouseDocumentSchemaConfig) DocumentAiWarehouseDocumentSchema
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig">DocumentAiWarehouseDocumentSchemaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig">DocumentAiWarehouseDocumentSchemaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.putPropertyDefinitions">PutPropertyDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetDocumentIsFolder">ResetDocumentIsFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPropertyDefinitions` <a name="PutPropertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.putPropertyDefinitions"></a>

```go
func PutPropertyDefinitions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.putPropertyDefinitions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.putTimeouts"></a>

```go
func PutTimeouts(value DocumentAiWarehouseDocumentSchemaTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts">DocumentAiWarehouseDocumentSchemaTimeouts</a>

---

##### `ResetDocumentIsFolder` <a name="ResetDocumentIsFolder" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetDocumentIsFolder"></a>

```go
func ResetDocumentIsFolder()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DocumentAiWarehouseDocumentSchema resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

documentaiwarehousedocumentschema.DocumentAiWarehouseDocumentSchema_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

documentaiwarehousedocumentschema.DocumentAiWarehouseDocumentSchema_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

documentaiwarehousedocumentschema.DocumentAiWarehouseDocumentSchema_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

documentaiwarehousedocumentschema.DocumentAiWarehouseDocumentSchema_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DocumentAiWarehouseDocumentSchema resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DocumentAiWarehouseDocumentSchema to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DocumentAiWarehouseDocumentSchema that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DocumentAiWarehouseDocumentSchema to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.propertyDefinitions">PropertyDefinitions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference">DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.documentIsFolderInput">DocumentIsFolderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.projectNumberInput">ProjectNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.propertyDefinitionsInput">PropertyDefinitionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.documentIsFolder">DocumentIsFolder</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.projectNumber">ProjectNumber</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PropertyDefinitions`<sup>Required</sup> <a name="PropertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.propertyDefinitions"></a>

```go
func PropertyDefinitions() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.timeouts"></a>

```go
func Timeouts() DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference">DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DocumentIsFolderInput`<sup>Optional</sup> <a name="DocumentIsFolderInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.documentIsFolderInput"></a>

```go
func DocumentIsFolderInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectNumberInput`<sup>Optional</sup> <a name="ProjectNumberInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.projectNumberInput"></a>

```go
func ProjectNumberInput() *string
```

- *Type:* *string

---

##### `PropertyDefinitionsInput`<sup>Optional</sup> <a name="PropertyDefinitionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.propertyDefinitionsInput"></a>

```go
func PropertyDefinitionsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DocumentIsFolder`<sup>Required</sup> <a name="DocumentIsFolder" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.documentIsFolder"></a>

```go
func DocumentIsFolder() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ProjectNumber`<sup>Required</sup> <a name="ProjectNumber" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.projectNumber"></a>

```go
func ProjectNumber() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchema.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DocumentAiWarehouseDocumentSchemaConfig <a name="DocumentAiWarehouseDocumentSchemaConfig" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

&documentaiwarehousedocumentschema.DocumentAiWarehouseDocumentSchemaConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Location: *string,
	ProjectNumber: *string,
	PropertyDefinitions: interface{},
	DocumentIsFolder: interface{},
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v12.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Name of the schema given by the user. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.location">Location</a></code> | <code>*string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.projectNumber">ProjectNumber</a></code> | <code>*string</code> | The unique identifier of the project. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.propertyDefinitions">PropertyDefinitions</a></code> | <code>interface{}</code> | property_definitions block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.documentIsFolder">DocumentIsFolder</a></code> | <code>interface{}</code> | Tells whether the document is a folder or a typical document. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#id DocumentAiWarehouseDocumentSchema#id}. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts">DocumentAiWarehouseDocumentSchemaTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Name of the schema given by the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#display_name DocumentAiWarehouseDocumentSchema#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#location DocumentAiWarehouseDocumentSchema#location}

---

##### `ProjectNumber`<sup>Required</sup> <a name="ProjectNumber" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.projectNumber"></a>

```go
ProjectNumber *string
```

- *Type:* *string

The unique identifier of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#project_number DocumentAiWarehouseDocumentSchema#project_number}

---

##### `PropertyDefinitions`<sup>Required</sup> <a name="PropertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.propertyDefinitions"></a>

```go
PropertyDefinitions interface{}
```

- *Type:* interface{}

property_definitions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#property_definitions DocumentAiWarehouseDocumentSchema#property_definitions}

---

##### `DocumentIsFolder`<sup>Optional</sup> <a name="DocumentIsFolder" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.documentIsFolder"></a>

```go
DocumentIsFolder interface{}
```

- *Type:* interface{}

Tells whether the document is a folder or a typical document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#document_is_folder DocumentAiWarehouseDocumentSchema#document_is_folder}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#id DocumentAiWarehouseDocumentSchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaConfig.property.timeouts"></a>

```go
Timeouts DocumentAiWarehouseDocumentSchemaTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts">DocumentAiWarehouseDocumentSchemaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#timeouts DocumentAiWarehouseDocumentSchema#timeouts}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

&documentaiwarehousedocumentschema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions {
	Name: *string,
	DateTimeTypeOptions: github.com/cdktf/cdktf-provider-google-go/google/v12.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions,
	DisplayName: *string,
	EnumTypeOptions: github.com/cdktf/cdktf-provider-google-go/google/v12.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions,
	FloatTypeOptions: github.com/cdktf/cdktf-provider-google-go/google/v12.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions,
	IntegerTypeOptions: github.com/cdktf/cdktf-provider-google-go/google/v12.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions,
	IsFilterable: interface{},
	IsMetadata: interface{},
	IsRepeatable: interface{},
	IsRequired: interface{},
	IsSearchable: interface{},
	MapTypeOptions: github.com/cdktf/cdktf-provider-google-go/google/v12.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions,
	PropertyTypeOptions: github.com/cdktf/cdktf-provider-google-go/google/v12.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions,
	RetrievalImportance: *string,
	SchemaSources: interface{},
	TextTypeOptions: github.com/cdktf/cdktf-provider-google-go/google/v12.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions,
	TimestampTypeOptions: github.com/cdktf/cdktf-provider-google-go/google/v12.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.name">Name</a></code> | <code>*string</code> | The name of the metadata property. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.dateTimeTypeOptions">DateTimeTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a></code> | date_time_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.displayName">DisplayName</a></code> | <code>*string</code> | The display-name for the property, used for front-end. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.enumTypeOptions">EnumTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a></code> | enum_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.floatTypeOptions">FloatTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a></code> | float_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.integerTypeOptions">IntegerTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a></code> | integer_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isFilterable">IsFilterable</a></code> | <code>interface{}</code> | Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isMetadata">IsMetadata</a></code> | <code>interface{}</code> | Whether the property is user supplied metadata. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isRepeatable">IsRepeatable</a></code> | <code>interface{}</code> | Whether the property can have multiple values. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isRequired">IsRequired</a></code> | <code>interface{}</code> | Whether the property is mandatory. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isSearchable">IsSearchable</a></code> | <code>interface{}</code> | Indicates that the property should be included in a global search. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.mapTypeOptions">MapTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a></code> | map_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.propertyTypeOptions">PropertyTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a></code> | property_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.retrievalImportance">RetrievalImportance</a></code> | <code>*string</code> | Stores the retrieval importance. Possible values: ["HIGHEST", "HIGHER", "HIGH", "MEDIUM", "LOW", "LOWEST"]. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.schemaSources">SchemaSources</a></code> | <code>interface{}</code> | schema_sources block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.textTypeOptions">TextTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a></code> | text_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.timestampTypeOptions">TimestampTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a></code> | timestamp_type_options block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the metadata property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#name DocumentAiWarehouseDocumentSchema#name}

---

##### `DateTimeTypeOptions`<sup>Optional</sup> <a name="DateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.dateTimeTypeOptions"></a>

```go
DateTimeTypeOptions DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a>

date_time_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#date_time_type_options DocumentAiWarehouseDocumentSchema#date_time_type_options}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display-name for the property, used for front-end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#display_name DocumentAiWarehouseDocumentSchema#display_name}

---

##### `EnumTypeOptions`<sup>Optional</sup> <a name="EnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.enumTypeOptions"></a>

```go
EnumTypeOptions DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a>

enum_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#enum_type_options DocumentAiWarehouseDocumentSchema#enum_type_options}

---

##### `FloatTypeOptions`<sup>Optional</sup> <a name="FloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.floatTypeOptions"></a>

```go
FloatTypeOptions DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a>

float_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#float_type_options DocumentAiWarehouseDocumentSchema#float_type_options}

---

##### `IntegerTypeOptions`<sup>Optional</sup> <a name="IntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.integerTypeOptions"></a>

```go
IntegerTypeOptions DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a>

integer_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#integer_type_options DocumentAiWarehouseDocumentSchema#integer_type_options}

---

##### `IsFilterable`<sup>Optional</sup> <a name="IsFilterable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isFilterable"></a>

```go
IsFilterable interface{}
```

- *Type:* interface{}

Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#is_filterable DocumentAiWarehouseDocumentSchema#is_filterable}

---

##### `IsMetadata`<sup>Optional</sup> <a name="IsMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isMetadata"></a>

```go
IsMetadata interface{}
```

- *Type:* interface{}

Whether the property is user supplied metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#is_metadata DocumentAiWarehouseDocumentSchema#is_metadata}

---

##### `IsRepeatable`<sup>Optional</sup> <a name="IsRepeatable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isRepeatable"></a>

```go
IsRepeatable interface{}
```

- *Type:* interface{}

Whether the property can have multiple values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#is_repeatable DocumentAiWarehouseDocumentSchema#is_repeatable}

---

##### `IsRequired`<sup>Optional</sup> <a name="IsRequired" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isRequired"></a>

```go
IsRequired interface{}
```

- *Type:* interface{}

Whether the property is mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#is_required DocumentAiWarehouseDocumentSchema#is_required}

---

##### `IsSearchable`<sup>Optional</sup> <a name="IsSearchable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.isSearchable"></a>

```go
IsSearchable interface{}
```

- *Type:* interface{}

Indicates that the property should be included in a global search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#is_searchable DocumentAiWarehouseDocumentSchema#is_searchable}

---

##### `MapTypeOptions`<sup>Optional</sup> <a name="MapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.mapTypeOptions"></a>

```go
MapTypeOptions DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a>

map_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#map_type_options DocumentAiWarehouseDocumentSchema#map_type_options}

---

##### `PropertyTypeOptions`<sup>Optional</sup> <a name="PropertyTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.propertyTypeOptions"></a>

```go
PropertyTypeOptions DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a>

property_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#property_type_options DocumentAiWarehouseDocumentSchema#property_type_options}

---

##### `RetrievalImportance`<sup>Optional</sup> <a name="RetrievalImportance" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.retrievalImportance"></a>

```go
RetrievalImportance *string
```

- *Type:* *string

Stores the retrieval importance. Possible values: ["HIGHEST", "HIGHER", "HIGH", "MEDIUM", "LOW", "LOWEST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#retrieval_importance DocumentAiWarehouseDocumentSchema#retrieval_importance}

---

##### `SchemaSources`<sup>Optional</sup> <a name="SchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.schemaSources"></a>

```go
SchemaSources interface{}
```

- *Type:* interface{}

schema_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#schema_sources DocumentAiWarehouseDocumentSchema#schema_sources}

---

##### `TextTypeOptions`<sup>Optional</sup> <a name="TextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.textTypeOptions"></a>

```go
TextTypeOptions DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a>

text_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#text_type_options DocumentAiWarehouseDocumentSchema#text_type_options}

---

##### `TimestampTypeOptions`<sup>Optional</sup> <a name="TimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitions.property.timestampTypeOptions"></a>

```go
TimestampTypeOptions DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a>

timestamp_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#timestamp_type_options DocumentAiWarehouseDocumentSchema#timestamp_type_options}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

&documentaiwarehousedocumentschema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions {

}
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

&documentaiwarehousedocumentschema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions {
	PossibleValues: *[]*string,
	ValidationCheckDisabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions.property.possibleValues">PossibleValues</a></code> | <code>*[]*string</code> | List of possible enum values. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions.property.validationCheckDisabled">ValidationCheckDisabled</a></code> | <code>interface{}</code> | Make sure the enum property value provided in the document is in the possile value list during document creation. |

---

##### `PossibleValues`<sup>Required</sup> <a name="PossibleValues" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions.property.possibleValues"></a>

```go
PossibleValues *[]*string
```

- *Type:* *[]*string

List of possible enum values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#possible_values DocumentAiWarehouseDocumentSchema#possible_values}

---

##### `ValidationCheckDisabled`<sup>Optional</sup> <a name="ValidationCheckDisabled" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions.property.validationCheckDisabled"></a>

```go
ValidationCheckDisabled interface{}
```

- *Type:* interface{}

Make sure the enum property value provided in the document is in the possile value list during document creation.

The validation check runs by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#validation_check_disabled DocumentAiWarehouseDocumentSchema#validation_check_disabled}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

&documentaiwarehousedocumentschema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions {

}
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

&documentaiwarehousedocumentschema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions {

}
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

&documentaiwarehousedocumentschema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions {

}
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

&documentaiwarehousedocumentschema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions {
	PropertyDefinitions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions.property.propertyDefinitions">PropertyDefinitions</a></code> | <code>interface{}</code> | property_definitions block. |

---

##### `PropertyDefinitions`<sup>Required</sup> <a name="PropertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions.property.propertyDefinitions"></a>

```go
PropertyDefinitions interface{}
```

- *Type:* interface{}

property_definitions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#property_definitions DocumentAiWarehouseDocumentSchema#property_definitions}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

&documentaiwarehousedocumentschema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions {
	Name: *string,
	DateTimeTypeOptions: github.com/cdktf/cdktf-provider-google-go/google/v12.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions,
	DisplayName: *string,
	EnumTypeOptions: github.com/cdktf/cdktf-provider-google-go/google/v12.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions,
	FloatTypeOptions: github.com/cdktf/cdktf-provider-google-go/google/v12.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions,
	IntegerTypeOptions: github.com/cdktf/cdktf-provider-google-go/google/v12.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions,
	IsFilterable: interface{},
	IsMetadata: interface{},
	IsRepeatable: interface{},
	IsRequired: interface{},
	IsSearchable: interface{},
	MapTypeOptions: github.com/cdktf/cdktf-provider-google-go/google/v12.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions,
	RetrievalImportance: *string,
	SchemaSources: interface{},
	TextTypeOptions: github.com/cdktf/cdktf-provider-google-go/google/v12.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions,
	TimestampTypeOptions: github.com/cdktf/cdktf-provider-google-go/google/v12.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.name">Name</a></code> | <code>*string</code> | The name of the metadata property. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.dateTimeTypeOptions">DateTimeTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a></code> | date_time_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.displayName">DisplayName</a></code> | <code>*string</code> | The display-name for the property, used for front-end. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.enumTypeOptions">EnumTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a></code> | enum_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.floatTypeOptions">FloatTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a></code> | float_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.integerTypeOptions">IntegerTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a></code> | integer_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isFilterable">IsFilterable</a></code> | <code>interface{}</code> | Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isMetadata">IsMetadata</a></code> | <code>interface{}</code> | Whether the property is user supplied metadata. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isRepeatable">IsRepeatable</a></code> | <code>interface{}</code> | Whether the property can have multiple values. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isRequired">IsRequired</a></code> | <code>interface{}</code> | Whether the property is mandatory. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isSearchable">IsSearchable</a></code> | <code>interface{}</code> | Indicates that the property should be included in a global search. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.mapTypeOptions">MapTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a></code> | map_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.retrievalImportance">RetrievalImportance</a></code> | <code>*string</code> | Stores the retrieval importance. Possible values: ["HIGHEST", "HIGHER", "HIGH", "MEDIUM", "LOW", "LOWEST"]. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.schemaSources">SchemaSources</a></code> | <code>interface{}</code> | schema_sources block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.textTypeOptions">TextTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a></code> | text_type_options block. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.timestampTypeOptions">TimestampTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a></code> | timestamp_type_options block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the metadata property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#name DocumentAiWarehouseDocumentSchema#name}

---

##### `DateTimeTypeOptions`<sup>Optional</sup> <a name="DateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.dateTimeTypeOptions"></a>

```go
DateTimeTypeOptions DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a>

date_time_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#date_time_type_options DocumentAiWarehouseDocumentSchema#date_time_type_options}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display-name for the property, used for front-end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#display_name DocumentAiWarehouseDocumentSchema#display_name}

---

##### `EnumTypeOptions`<sup>Optional</sup> <a name="EnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.enumTypeOptions"></a>

```go
EnumTypeOptions DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a>

enum_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#enum_type_options DocumentAiWarehouseDocumentSchema#enum_type_options}

---

##### `FloatTypeOptions`<sup>Optional</sup> <a name="FloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.floatTypeOptions"></a>

```go
FloatTypeOptions DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a>

float_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#float_type_options DocumentAiWarehouseDocumentSchema#float_type_options}

---

##### `IntegerTypeOptions`<sup>Optional</sup> <a name="IntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.integerTypeOptions"></a>

```go
IntegerTypeOptions DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a>

integer_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#integer_type_options DocumentAiWarehouseDocumentSchema#integer_type_options}

---

##### `IsFilterable`<sup>Optional</sup> <a name="IsFilterable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isFilterable"></a>

```go
IsFilterable interface{}
```

- *Type:* interface{}

Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#is_filterable DocumentAiWarehouseDocumentSchema#is_filterable}

---

##### `IsMetadata`<sup>Optional</sup> <a name="IsMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isMetadata"></a>

```go
IsMetadata interface{}
```

- *Type:* interface{}

Whether the property is user supplied metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#is_metadata DocumentAiWarehouseDocumentSchema#is_metadata}

---

##### `IsRepeatable`<sup>Optional</sup> <a name="IsRepeatable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isRepeatable"></a>

```go
IsRepeatable interface{}
```

- *Type:* interface{}

Whether the property can have multiple values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#is_repeatable DocumentAiWarehouseDocumentSchema#is_repeatable}

---

##### `IsRequired`<sup>Optional</sup> <a name="IsRequired" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isRequired"></a>

```go
IsRequired interface{}
```

- *Type:* interface{}

Whether the property is mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#is_required DocumentAiWarehouseDocumentSchema#is_required}

---

##### `IsSearchable`<sup>Optional</sup> <a name="IsSearchable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.isSearchable"></a>

```go
IsSearchable interface{}
```

- *Type:* interface{}

Indicates that the property should be included in a global search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#is_searchable DocumentAiWarehouseDocumentSchema#is_searchable}

---

##### `MapTypeOptions`<sup>Optional</sup> <a name="MapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.mapTypeOptions"></a>

```go
MapTypeOptions DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a>

map_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#map_type_options DocumentAiWarehouseDocumentSchema#map_type_options}

---

##### `RetrievalImportance`<sup>Optional</sup> <a name="RetrievalImportance" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.retrievalImportance"></a>

```go
RetrievalImportance *string
```

- *Type:* *string

Stores the retrieval importance. Possible values: ["HIGHEST", "HIGHER", "HIGH", "MEDIUM", "LOW", "LOWEST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#retrieval_importance DocumentAiWarehouseDocumentSchema#retrieval_importance}

---

##### `SchemaSources`<sup>Optional</sup> <a name="SchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.schemaSources"></a>

```go
SchemaSources interface{}
```

- *Type:* interface{}

schema_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#schema_sources DocumentAiWarehouseDocumentSchema#schema_sources}

---

##### `TextTypeOptions`<sup>Optional</sup> <a name="TextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.textTypeOptions"></a>

```go
TextTypeOptions DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a>

text_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#text_type_options DocumentAiWarehouseDocumentSchema#text_type_options}

---

##### `TimestampTypeOptions`<sup>Optional</sup> <a name="TimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions.property.timestampTypeOptions"></a>

```go
TimestampTypeOptions DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a>

timestamp_type_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#timestamp_type_options DocumentAiWarehouseDocumentSchema#timestamp_type_options}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

&documentaiwarehousedocumentschema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions {

}
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

&documentaiwarehousedocumentschema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions {
	PossibleValues: *[]*string,
	ValidationCheckDisabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions.property.possibleValues">PossibleValues</a></code> | <code>*[]*string</code> | List of possible enum values. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions.property.validationCheckDisabled">ValidationCheckDisabled</a></code> | <code>interface{}</code> | Make sure the enum property value provided in the document is in the possile value list during document creation. |

---

##### `PossibleValues`<sup>Required</sup> <a name="PossibleValues" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions.property.possibleValues"></a>

```go
PossibleValues *[]*string
```

- *Type:* *[]*string

List of possible enum values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#possible_values DocumentAiWarehouseDocumentSchema#possible_values}

---

##### `ValidationCheckDisabled`<sup>Optional</sup> <a name="ValidationCheckDisabled" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions.property.validationCheckDisabled"></a>

```go
ValidationCheckDisabled interface{}
```

- *Type:* interface{}

Make sure the enum property value provided in the document is in the possile value list during document creation.

The validation check runs by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#validation_check_disabled DocumentAiWarehouseDocumentSchema#validation_check_disabled}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

&documentaiwarehousedocumentschema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions {

}
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

&documentaiwarehousedocumentschema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions {

}
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

&documentaiwarehousedocumentschema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions {

}
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

&documentaiwarehousedocumentschema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources {
	Name: *string,
	ProcessorType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources.property.name">Name</a></code> | <code>*string</code> | The schema name in the source. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources.property.processorType">ProcessorType</a></code> | <code>*string</code> | The Doc AI processor type name. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources.property.name"></a>

```go
Name *string
```

- *Type:* *string

The schema name in the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#name DocumentAiWarehouseDocumentSchema#name}

---

##### `ProcessorType`<sup>Optional</sup> <a name="ProcessorType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources.property.processorType"></a>

```go
ProcessorType *string
```

- *Type:* *string

The Doc AI processor type name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#processor_type DocumentAiWarehouseDocumentSchema#processor_type}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

&documentaiwarehousedocumentschema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions {

}
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

&documentaiwarehousedocumentschema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions {

}
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

&documentaiwarehousedocumentschema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources {
	Name: *string,
	ProcessorType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources.property.name">Name</a></code> | <code>*string</code> | The schema name in the source. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources.property.processorType">ProcessorType</a></code> | <code>*string</code> | The Doc AI processor type name. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources.property.name"></a>

```go
Name *string
```

- *Type:* *string

The schema name in the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#name DocumentAiWarehouseDocumentSchema#name}

---

##### `ProcessorType`<sup>Optional</sup> <a name="ProcessorType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources.property.processorType"></a>

```go
ProcessorType *string
```

- *Type:* *string

The Doc AI processor type name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#processor_type DocumentAiWarehouseDocumentSchema#processor_type}

---

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

&documentaiwarehousedocumentschema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions {

}
```


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

&documentaiwarehousedocumentschema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions {

}
```


### DocumentAiWarehouseDocumentSchemaTimeouts <a name="DocumentAiWarehouseDocumentSchemaTimeouts" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

&documentaiwarehousedocumentschema.DocumentAiWarehouseDocumentSchemaTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#create DocumentAiWarehouseDocumentSchema#create}. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#delete DocumentAiWarehouseDocumentSchema#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#create DocumentAiWarehouseDocumentSchema#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/document_ai_warehouse_document_schema#delete DocumentAiWarehouseDocumentSchema#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

documentaiwarehousedocumentschema.NewDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

documentaiwarehousedocumentschema.NewDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.resetValidationCheckDisabled">ResetValidationCheckDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValidationCheckDisabled` <a name="ResetValidationCheckDisabled" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.resetValidationCheckDisabled"></a>

```go
func ResetValidationCheckDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValuesInput">PossibleValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabledInput">ValidationCheckDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValues">PossibleValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabled">ValidationCheckDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PossibleValuesInput`<sup>Optional</sup> <a name="PossibleValuesInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValuesInput"></a>

```go
func PossibleValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValidationCheckDisabledInput`<sup>Optional</sup> <a name="ValidationCheckDisabledInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabledInput"></a>

```go
func ValidationCheckDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `PossibleValues`<sup>Required</sup> <a name="PossibleValues" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValues"></a>

```go
func PossibleValues() *[]*string
```

- *Type:* *[]*string

---

##### `ValidationCheckDisabled`<sup>Required</sup> <a name="ValidationCheckDisabled" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabled"></a>

```go
func ValidationCheckDisabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

documentaiwarehousedocumentschema.NewDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

documentaiwarehousedocumentschema.NewDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

documentaiwarehousedocumentschema.NewDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.get"></a>

```go
func Get(index *f64) DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

documentaiwarehousedocumentschema.NewDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

documentaiwarehousedocumentschema.NewDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putDateTimeTypeOptions">PutDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putEnumTypeOptions">PutEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putFloatTypeOptions">PutFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putIntegerTypeOptions">PutIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putMapTypeOptions">PutMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putPropertyTypeOptions">PutPropertyTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putSchemaSources">PutSchemaSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTextTypeOptions">PutTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTimestampTypeOptions">PutTimestampTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetDateTimeTypeOptions">ResetDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetEnumTypeOptions">ResetEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetFloatTypeOptions">ResetFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIntegerTypeOptions">ResetIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsFilterable">ResetIsFilterable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsMetadata">ResetIsMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsRepeatable">ResetIsRepeatable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsRequired">ResetIsRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsSearchable">ResetIsSearchable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetMapTypeOptions">ResetMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetPropertyTypeOptions">ResetPropertyTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetRetrievalImportance">ResetRetrievalImportance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetSchemaSources">ResetSchemaSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetTextTypeOptions">ResetTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetTimestampTypeOptions">ResetTimestampTypeOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDateTimeTypeOptions` <a name="PutDateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putDateTimeTypeOptions"></a>

```go
func PutDateTimeTypeOptions(value DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putDateTimeTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a>

---

##### `PutEnumTypeOptions` <a name="PutEnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putEnumTypeOptions"></a>

```go
func PutEnumTypeOptions(value DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putEnumTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a>

---

##### `PutFloatTypeOptions` <a name="PutFloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putFloatTypeOptions"></a>

```go
func PutFloatTypeOptions(value DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putFloatTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a>

---

##### `PutIntegerTypeOptions` <a name="PutIntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putIntegerTypeOptions"></a>

```go
func PutIntegerTypeOptions(value DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putIntegerTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a>

---

##### `PutMapTypeOptions` <a name="PutMapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putMapTypeOptions"></a>

```go
func PutMapTypeOptions(value DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putMapTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a>

---

##### `PutPropertyTypeOptions` <a name="PutPropertyTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putPropertyTypeOptions"></a>

```go
func PutPropertyTypeOptions(value DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putPropertyTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a>

---

##### `PutSchemaSources` <a name="PutSchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putSchemaSources"></a>

```go
func PutSchemaSources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putSchemaSources.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTextTypeOptions` <a name="PutTextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTextTypeOptions"></a>

```go
func PutTextTypeOptions(value DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTextTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a>

---

##### `PutTimestampTypeOptions` <a name="PutTimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTimestampTypeOptions"></a>

```go
func PutTimestampTypeOptions(value DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.putTimestampTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a>

---

##### `ResetDateTimeTypeOptions` <a name="ResetDateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetDateTimeTypeOptions"></a>

```go
func ResetDateTimeTypeOptions()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEnumTypeOptions` <a name="ResetEnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetEnumTypeOptions"></a>

```go
func ResetEnumTypeOptions()
```

##### `ResetFloatTypeOptions` <a name="ResetFloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetFloatTypeOptions"></a>

```go
func ResetFloatTypeOptions()
```

##### `ResetIntegerTypeOptions` <a name="ResetIntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIntegerTypeOptions"></a>

```go
func ResetIntegerTypeOptions()
```

##### `ResetIsFilterable` <a name="ResetIsFilterable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsFilterable"></a>

```go
func ResetIsFilterable()
```

##### `ResetIsMetadata` <a name="ResetIsMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsMetadata"></a>

```go
func ResetIsMetadata()
```

##### `ResetIsRepeatable` <a name="ResetIsRepeatable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsRepeatable"></a>

```go
func ResetIsRepeatable()
```

##### `ResetIsRequired` <a name="ResetIsRequired" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsRequired"></a>

```go
func ResetIsRequired()
```

##### `ResetIsSearchable` <a name="ResetIsSearchable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetIsSearchable"></a>

```go
func ResetIsSearchable()
```

##### `ResetMapTypeOptions` <a name="ResetMapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetMapTypeOptions"></a>

```go
func ResetMapTypeOptions()
```

##### `ResetPropertyTypeOptions` <a name="ResetPropertyTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetPropertyTypeOptions"></a>

```go
func ResetPropertyTypeOptions()
```

##### `ResetRetrievalImportance` <a name="ResetRetrievalImportance" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetRetrievalImportance"></a>

```go
func ResetRetrievalImportance()
```

##### `ResetSchemaSources` <a name="ResetSchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetSchemaSources"></a>

```go
func ResetSchemaSources()
```

##### `ResetTextTypeOptions` <a name="ResetTextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetTextTypeOptions"></a>

```go
func ResetTextTypeOptions()
```

##### `ResetTimestampTypeOptions` <a name="ResetTimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.resetTimestampTypeOptions"></a>

```go
func ResetTimestampTypeOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.dateTimeTypeOptions">DateTimeTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.enumTypeOptions">EnumTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.floatTypeOptions">FloatTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.integerTypeOptions">IntegerTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.mapTypeOptions">MapTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.propertyTypeOptions">PropertyTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.schemaSources">SchemaSources</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.textTypeOptions">TextTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.timestampTypeOptions">TimestampTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.dateTimeTypeOptionsInput">DateTimeTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.enumTypeOptionsInput">EnumTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.floatTypeOptionsInput">FloatTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.integerTypeOptionsInput">IntegerTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isFilterableInput">IsFilterableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isMetadataInput">IsMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRepeatableInput">IsRepeatableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRequiredInput">IsRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isSearchableInput">IsSearchableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.mapTypeOptionsInput">MapTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.propertyTypeOptionsInput">PropertyTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.retrievalImportanceInput">RetrievalImportanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.schemaSourcesInput">SchemaSourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.textTypeOptionsInput">TextTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.timestampTypeOptionsInput">TimestampTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isFilterable">IsFilterable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isMetadata">IsMetadata</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRepeatable">IsRepeatable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRequired">IsRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isSearchable">IsSearchable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.retrievalImportance">RetrievalImportance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DateTimeTypeOptions`<sup>Required</sup> <a name="DateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.dateTimeTypeOptions"></a>

```go
func DateTimeTypeOptions() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference</a>

---

##### `EnumTypeOptions`<sup>Required</sup> <a name="EnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.enumTypeOptions"></a>

```go
func EnumTypeOptions() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference</a>

---

##### `FloatTypeOptions`<sup>Required</sup> <a name="FloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.floatTypeOptions"></a>

```go
func FloatTypeOptions() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference</a>

---

##### `IntegerTypeOptions`<sup>Required</sup> <a name="IntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.integerTypeOptions"></a>

```go
func IntegerTypeOptions() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference</a>

---

##### `MapTypeOptions`<sup>Required</sup> <a name="MapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.mapTypeOptions"></a>

```go
func MapTypeOptions() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference</a>

---

##### `PropertyTypeOptions`<sup>Required</sup> <a name="PropertyTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.propertyTypeOptions"></a>

```go
func PropertyTypeOptions() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference</a>

---

##### `SchemaSources`<sup>Required</sup> <a name="SchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.schemaSources"></a>

```go
func SchemaSources() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList</a>

---

##### `TextTypeOptions`<sup>Required</sup> <a name="TextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.textTypeOptions"></a>

```go
func TextTypeOptions() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference</a>

---

##### `TimestampTypeOptions`<sup>Required</sup> <a name="TimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.timestampTypeOptions"></a>

```go
func TimestampTypeOptions() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference</a>

---

##### `DateTimeTypeOptionsInput`<sup>Optional</sup> <a name="DateTimeTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.dateTimeTypeOptionsInput"></a>

```go
func DateTimeTypeOptionsInput() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnumTypeOptionsInput`<sup>Optional</sup> <a name="EnumTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.enumTypeOptionsInput"></a>

```go
func EnumTypeOptionsInput() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions</a>

---

##### `FloatTypeOptionsInput`<sup>Optional</sup> <a name="FloatTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.floatTypeOptionsInput"></a>

```go
func FloatTypeOptionsInput() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions</a>

---

##### `IntegerTypeOptionsInput`<sup>Optional</sup> <a name="IntegerTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.integerTypeOptionsInput"></a>

```go
func IntegerTypeOptionsInput() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions</a>

---

##### `IsFilterableInput`<sup>Optional</sup> <a name="IsFilterableInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isFilterableInput"></a>

```go
func IsFilterableInput() interface{}
```

- *Type:* interface{}

---

##### `IsMetadataInput`<sup>Optional</sup> <a name="IsMetadataInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isMetadataInput"></a>

```go
func IsMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `IsRepeatableInput`<sup>Optional</sup> <a name="IsRepeatableInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRepeatableInput"></a>

```go
func IsRepeatableInput() interface{}
```

- *Type:* interface{}

---

##### `IsRequiredInput`<sup>Optional</sup> <a name="IsRequiredInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRequiredInput"></a>

```go
func IsRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `IsSearchableInput`<sup>Optional</sup> <a name="IsSearchableInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isSearchableInput"></a>

```go
func IsSearchableInput() interface{}
```

- *Type:* interface{}

---

##### `MapTypeOptionsInput`<sup>Optional</sup> <a name="MapTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.mapTypeOptionsInput"></a>

```go
func MapTypeOptionsInput() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PropertyTypeOptionsInput`<sup>Optional</sup> <a name="PropertyTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.propertyTypeOptionsInput"></a>

```go
func PropertyTypeOptionsInput() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a>

---

##### `RetrievalImportanceInput`<sup>Optional</sup> <a name="RetrievalImportanceInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.retrievalImportanceInput"></a>

```go
func RetrievalImportanceInput() *string
```

- *Type:* *string

---

##### `SchemaSourcesInput`<sup>Optional</sup> <a name="SchemaSourcesInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.schemaSourcesInput"></a>

```go
func SchemaSourcesInput() interface{}
```

- *Type:* interface{}

---

##### `TextTypeOptionsInput`<sup>Optional</sup> <a name="TextTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.textTypeOptionsInput"></a>

```go
func TextTypeOptionsInput() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a>

---

##### `TimestampTypeOptionsInput`<sup>Optional</sup> <a name="TimestampTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.timestampTypeOptionsInput"></a>

```go
func TimestampTypeOptionsInput() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `IsFilterable`<sup>Required</sup> <a name="IsFilterable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isFilterable"></a>

```go
func IsFilterable() interface{}
```

- *Type:* interface{}

---

##### `IsMetadata`<sup>Required</sup> <a name="IsMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isMetadata"></a>

```go
func IsMetadata() interface{}
```

- *Type:* interface{}

---

##### `IsRepeatable`<sup>Required</sup> <a name="IsRepeatable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRepeatable"></a>

```go
func IsRepeatable() interface{}
```

- *Type:* interface{}

---

##### `IsRequired`<sup>Required</sup> <a name="IsRequired" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isRequired"></a>

```go
func IsRequired() interface{}
```

- *Type:* interface{}

---

##### `IsSearchable`<sup>Required</sup> <a name="IsSearchable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.isSearchable"></a>

```go
func IsSearchable() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RetrievalImportance`<sup>Required</sup> <a name="RetrievalImportance" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.retrievalImportance"></a>

```go
func RetrievalImportance() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

documentaiwarehousedocumentschema.NewDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.putPropertyDefinitions">PutPropertyDefinitions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPropertyDefinitions` <a name="PutPropertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.putPropertyDefinitions"></a>

```go
func PutPropertyDefinitions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.putPropertyDefinitions.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.propertyDefinitions">PropertyDefinitions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.propertyDefinitionsInput">PropertyDefinitionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PropertyDefinitions`<sup>Required</sup> <a name="PropertyDefinitions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.propertyDefinitions"></a>

```go
func PropertyDefinitions() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList</a>

---

##### `PropertyDefinitionsInput`<sup>Optional</sup> <a name="PropertyDefinitionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.propertyDefinitionsInput"></a>

```go
func PropertyDefinitionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

documentaiwarehousedocumentschema.NewDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

documentaiwarehousedocumentschema.NewDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.resetValidationCheckDisabled">ResetValidationCheckDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValidationCheckDisabled` <a name="ResetValidationCheckDisabled" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.resetValidationCheckDisabled"></a>

```go
func ResetValidationCheckDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValuesInput">PossibleValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabledInput">ValidationCheckDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValues">PossibleValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabled">ValidationCheckDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PossibleValuesInput`<sup>Optional</sup> <a name="PossibleValuesInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValuesInput"></a>

```go
func PossibleValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValidationCheckDisabledInput`<sup>Optional</sup> <a name="ValidationCheckDisabledInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabledInput"></a>

```go
func ValidationCheckDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `PossibleValues`<sup>Required</sup> <a name="PossibleValues" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.possibleValues"></a>

```go
func PossibleValues() *[]*string
```

- *Type:* *[]*string

---

##### `ValidationCheckDisabled`<sup>Required</sup> <a name="ValidationCheckDisabled" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.validationCheckDisabled"></a>

```go
func ValidationCheckDisabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

documentaiwarehousedocumentschema.NewDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

documentaiwarehousedocumentschema.NewDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

documentaiwarehousedocumentschema.NewDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.get"></a>

```go
func Get(index *f64) DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

documentaiwarehousedocumentschema.NewDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

documentaiwarehousedocumentschema.NewDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putDateTimeTypeOptions">PutDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putEnumTypeOptions">PutEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putFloatTypeOptions">PutFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putIntegerTypeOptions">PutIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putMapTypeOptions">PutMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putSchemaSources">PutSchemaSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTextTypeOptions">PutTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTimestampTypeOptions">PutTimestampTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetDateTimeTypeOptions">ResetDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetEnumTypeOptions">ResetEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetFloatTypeOptions">ResetFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIntegerTypeOptions">ResetIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsFilterable">ResetIsFilterable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsMetadata">ResetIsMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsRepeatable">ResetIsRepeatable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsRequired">ResetIsRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsSearchable">ResetIsSearchable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetMapTypeOptions">ResetMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetRetrievalImportance">ResetRetrievalImportance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetSchemaSources">ResetSchemaSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetTextTypeOptions">ResetTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetTimestampTypeOptions">ResetTimestampTypeOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDateTimeTypeOptions` <a name="PutDateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putDateTimeTypeOptions"></a>

```go
func PutDateTimeTypeOptions(value DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putDateTimeTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a>

---

##### `PutEnumTypeOptions` <a name="PutEnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putEnumTypeOptions"></a>

```go
func PutEnumTypeOptions(value DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putEnumTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a>

---

##### `PutFloatTypeOptions` <a name="PutFloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putFloatTypeOptions"></a>

```go
func PutFloatTypeOptions(value DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putFloatTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a>

---

##### `PutIntegerTypeOptions` <a name="PutIntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putIntegerTypeOptions"></a>

```go
func PutIntegerTypeOptions(value DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putIntegerTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a>

---

##### `PutMapTypeOptions` <a name="PutMapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putMapTypeOptions"></a>

```go
func PutMapTypeOptions(value DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putMapTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a>

---

##### `PutSchemaSources` <a name="PutSchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putSchemaSources"></a>

```go
func PutSchemaSources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putSchemaSources.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTextTypeOptions` <a name="PutTextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTextTypeOptions"></a>

```go
func PutTextTypeOptions(value DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTextTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a>

---

##### `PutTimestampTypeOptions` <a name="PutTimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTimestampTypeOptions"></a>

```go
func PutTimestampTypeOptions(value DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.putTimestampTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a>

---

##### `ResetDateTimeTypeOptions` <a name="ResetDateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetDateTimeTypeOptions"></a>

```go
func ResetDateTimeTypeOptions()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEnumTypeOptions` <a name="ResetEnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetEnumTypeOptions"></a>

```go
func ResetEnumTypeOptions()
```

##### `ResetFloatTypeOptions` <a name="ResetFloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetFloatTypeOptions"></a>

```go
func ResetFloatTypeOptions()
```

##### `ResetIntegerTypeOptions` <a name="ResetIntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIntegerTypeOptions"></a>

```go
func ResetIntegerTypeOptions()
```

##### `ResetIsFilterable` <a name="ResetIsFilterable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsFilterable"></a>

```go
func ResetIsFilterable()
```

##### `ResetIsMetadata` <a name="ResetIsMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsMetadata"></a>

```go
func ResetIsMetadata()
```

##### `ResetIsRepeatable` <a name="ResetIsRepeatable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsRepeatable"></a>

```go
func ResetIsRepeatable()
```

##### `ResetIsRequired` <a name="ResetIsRequired" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsRequired"></a>

```go
func ResetIsRequired()
```

##### `ResetIsSearchable` <a name="ResetIsSearchable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetIsSearchable"></a>

```go
func ResetIsSearchable()
```

##### `ResetMapTypeOptions` <a name="ResetMapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetMapTypeOptions"></a>

```go
func ResetMapTypeOptions()
```

##### `ResetRetrievalImportance` <a name="ResetRetrievalImportance" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetRetrievalImportance"></a>

```go
func ResetRetrievalImportance()
```

##### `ResetSchemaSources` <a name="ResetSchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetSchemaSources"></a>

```go
func ResetSchemaSources()
```

##### `ResetTextTypeOptions` <a name="ResetTextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetTextTypeOptions"></a>

```go
func ResetTextTypeOptions()
```

##### `ResetTimestampTypeOptions` <a name="ResetTimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.resetTimestampTypeOptions"></a>

```go
func ResetTimestampTypeOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.dateTimeTypeOptions">DateTimeTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.enumTypeOptions">EnumTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.floatTypeOptions">FloatTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.integerTypeOptions">IntegerTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.mapTypeOptions">MapTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.schemaSources">SchemaSources</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.textTypeOptions">TextTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.timestampTypeOptions">TimestampTypeOptions</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.dateTimeTypeOptionsInput">DateTimeTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.enumTypeOptionsInput">EnumTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.floatTypeOptionsInput">FloatTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.integerTypeOptionsInput">IntegerTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isFilterableInput">IsFilterableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isMetadataInput">IsMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRepeatableInput">IsRepeatableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRequiredInput">IsRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isSearchableInput">IsSearchableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.mapTypeOptionsInput">MapTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.retrievalImportanceInput">RetrievalImportanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.schemaSourcesInput">SchemaSourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.textTypeOptionsInput">TextTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.timestampTypeOptionsInput">TimestampTypeOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isFilterable">IsFilterable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isMetadata">IsMetadata</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRepeatable">IsRepeatable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRequired">IsRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isSearchable">IsSearchable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.retrievalImportance">RetrievalImportance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DateTimeTypeOptions`<sup>Required</sup> <a name="DateTimeTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.dateTimeTypeOptions"></a>

```go
func DateTimeTypeOptions() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference</a>

---

##### `EnumTypeOptions`<sup>Required</sup> <a name="EnumTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.enumTypeOptions"></a>

```go
func EnumTypeOptions() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference</a>

---

##### `FloatTypeOptions`<sup>Required</sup> <a name="FloatTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.floatTypeOptions"></a>

```go
func FloatTypeOptions() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference</a>

---

##### `IntegerTypeOptions`<sup>Required</sup> <a name="IntegerTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.integerTypeOptions"></a>

```go
func IntegerTypeOptions() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference</a>

---

##### `MapTypeOptions`<sup>Required</sup> <a name="MapTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.mapTypeOptions"></a>

```go
func MapTypeOptions() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference</a>

---

##### `SchemaSources`<sup>Required</sup> <a name="SchemaSources" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.schemaSources"></a>

```go
func SchemaSources() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList</a>

---

##### `TextTypeOptions`<sup>Required</sup> <a name="TextTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.textTypeOptions"></a>

```go
func TextTypeOptions() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference</a>

---

##### `TimestampTypeOptions`<sup>Required</sup> <a name="TimestampTypeOptions" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.timestampTypeOptions"></a>

```go
func TimestampTypeOptions() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference</a>

---

##### `DateTimeTypeOptionsInput`<sup>Optional</sup> <a name="DateTimeTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.dateTimeTypeOptionsInput"></a>

```go
func DateTimeTypeOptionsInput() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnumTypeOptionsInput`<sup>Optional</sup> <a name="EnumTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.enumTypeOptionsInput"></a>

```go
func EnumTypeOptionsInput() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions</a>

---

##### `FloatTypeOptionsInput`<sup>Optional</sup> <a name="FloatTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.floatTypeOptionsInput"></a>

```go
func FloatTypeOptionsInput() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions</a>

---

##### `IntegerTypeOptionsInput`<sup>Optional</sup> <a name="IntegerTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.integerTypeOptionsInput"></a>

```go
func IntegerTypeOptionsInput() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions</a>

---

##### `IsFilterableInput`<sup>Optional</sup> <a name="IsFilterableInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isFilterableInput"></a>

```go
func IsFilterableInput() interface{}
```

- *Type:* interface{}

---

##### `IsMetadataInput`<sup>Optional</sup> <a name="IsMetadataInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isMetadataInput"></a>

```go
func IsMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `IsRepeatableInput`<sup>Optional</sup> <a name="IsRepeatableInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRepeatableInput"></a>

```go
func IsRepeatableInput() interface{}
```

- *Type:* interface{}

---

##### `IsRequiredInput`<sup>Optional</sup> <a name="IsRequiredInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRequiredInput"></a>

```go
func IsRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `IsSearchableInput`<sup>Optional</sup> <a name="IsSearchableInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isSearchableInput"></a>

```go
func IsSearchableInput() interface{}
```

- *Type:* interface{}

---

##### `MapTypeOptionsInput`<sup>Optional</sup> <a name="MapTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.mapTypeOptionsInput"></a>

```go
func MapTypeOptionsInput() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RetrievalImportanceInput`<sup>Optional</sup> <a name="RetrievalImportanceInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.retrievalImportanceInput"></a>

```go
func RetrievalImportanceInput() *string
```

- *Type:* *string

---

##### `SchemaSourcesInput`<sup>Optional</sup> <a name="SchemaSourcesInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.schemaSourcesInput"></a>

```go
func SchemaSourcesInput() interface{}
```

- *Type:* interface{}

---

##### `TextTypeOptionsInput`<sup>Optional</sup> <a name="TextTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.textTypeOptionsInput"></a>

```go
func TextTypeOptionsInput() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a>

---

##### `TimestampTypeOptionsInput`<sup>Optional</sup> <a name="TimestampTypeOptionsInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.timestampTypeOptionsInput"></a>

```go
func TimestampTypeOptionsInput() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `IsFilterable`<sup>Required</sup> <a name="IsFilterable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isFilterable"></a>

```go
func IsFilterable() interface{}
```

- *Type:* interface{}

---

##### `IsMetadata`<sup>Required</sup> <a name="IsMetadata" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isMetadata"></a>

```go
func IsMetadata() interface{}
```

- *Type:* interface{}

---

##### `IsRepeatable`<sup>Required</sup> <a name="IsRepeatable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRepeatable"></a>

```go
func IsRepeatable() interface{}
```

- *Type:* interface{}

---

##### `IsRequired`<sup>Required</sup> <a name="IsRequired" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isRequired"></a>

```go
func IsRequired() interface{}
```

- *Type:* interface{}

---

##### `IsSearchable`<sup>Required</sup> <a name="IsSearchable" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.isSearchable"></a>

```go
func IsSearchable() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RetrievalImportance`<sup>Required</sup> <a name="RetrievalImportance" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.retrievalImportance"></a>

```go
func RetrievalImportance() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

documentaiwarehousedocumentschema.NewDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.get"></a>

```go
func Get(index *f64) DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

documentaiwarehousedocumentschema.NewDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resetProcessorType">ResetProcessorType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetProcessorType` <a name="ResetProcessorType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.resetProcessorType"></a>

```go
func ResetProcessorType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.processorTypeInput">ProcessorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.processorType">ProcessorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProcessorTypeInput`<sup>Optional</sup> <a name="ProcessorTypeInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.processorTypeInput"></a>

```go
func ProcessorTypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProcessorType`<sup>Required</sup> <a name="ProcessorType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.processorType"></a>

```go
func ProcessorType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

documentaiwarehousedocumentschema.NewDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

documentaiwarehousedocumentschema.NewDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

documentaiwarehousedocumentschema.NewDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.get"></a>

```go
func Get(index *f64) DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

documentaiwarehousedocumentschema.NewDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resetProcessorType">ResetProcessorType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetProcessorType` <a name="ResetProcessorType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.resetProcessorType"></a>

```go
func ResetProcessorType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.processorTypeInput">ProcessorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.processorType">ProcessorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProcessorTypeInput`<sup>Optional</sup> <a name="ProcessorTypeInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.processorTypeInput"></a>

```go
func ProcessorTypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProcessorType`<sup>Required</sup> <a name="ProcessorType" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.processorType"></a>

```go
func ProcessorType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

documentaiwarehousedocumentschema.NewDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference <a name="DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

documentaiwarehousedocumentschema.NewDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions
```

- *Type:* <a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions">DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions</a>

---


### DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference <a name="DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v12/documentaiwarehousedocumentschema"

documentaiwarehousedocumentschema.NewDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.documentAiWarehouseDocumentSchema.DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



