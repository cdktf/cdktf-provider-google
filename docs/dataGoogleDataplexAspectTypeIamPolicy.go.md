# `dataGoogleDataplexAspectTypeIamPolicy` Submodule <a name="`dataGoogleDataplexAspectTypeIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleDataplexAspectTypeIamPolicy <a name="DataGoogleDataplexAspectTypeIamPolicy" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/dataplex_aspect_type_iam_policy google_dataplex_aspect_type_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogledataplexaspecttypeiampolicy"

datagoogledataplexaspecttypeiampolicy.NewDataGoogleDataplexAspectTypeIamPolicy(scope Construct, id *string, config DataGoogleDataplexAspectTypeIamPolicyConfig) DataGoogleDataplexAspectTypeIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig">DataGoogleDataplexAspectTypeIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig">DataGoogleDataplexAspectTypeIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleDataplexAspectTypeIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogledataplexaspecttypeiampolicy"

datagoogledataplexaspecttypeiampolicy.DataGoogleDataplexAspectTypeIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogledataplexaspecttypeiampolicy"

datagoogledataplexaspecttypeiampolicy.DataGoogleDataplexAspectTypeIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogledataplexaspecttypeiampolicy"

datagoogledataplexaspecttypeiampolicy.DataGoogleDataplexAspectTypeIamPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogledataplexaspecttypeiampolicy"

datagoogledataplexaspecttypeiampolicy.DataGoogleDataplexAspectTypeIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleDataplexAspectTypeIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleDataplexAspectTypeIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleDataplexAspectTypeIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/dataplex_aspect_type_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleDataplexAspectTypeIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.aspectTypeIdInput">AspectTypeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.aspectTypeId">AspectTypeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `AspectTypeIdInput`<sup>Optional</sup> <a name="AspectTypeIdInput" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.aspectTypeIdInput"></a>

```go
func AspectTypeIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `AspectTypeId`<sup>Required</sup> <a name="AspectTypeId" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.aspectTypeId"></a>

```go
func AspectTypeId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleDataplexAspectTypeIamPolicyConfig <a name="DataGoogleDataplexAspectTypeIamPolicyConfig" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogledataplexaspecttypeiampolicy"

&datagoogledataplexaspecttypeiampolicy.DataGoogleDataplexAspectTypeIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AspectTypeId: *string,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.aspectTypeId">AspectTypeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/dataplex_aspect_type_iam_policy#aspect_type_id DataGoogleDataplexAspectTypeIamPolicy#aspect_type_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/dataplex_aspect_type_iam_policy#id DataGoogleDataplexAspectTypeIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/dataplex_aspect_type_iam_policy#location DataGoogleDataplexAspectTypeIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/dataplex_aspect_type_iam_policy#project DataGoogleDataplexAspectTypeIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AspectTypeId`<sup>Required</sup> <a name="AspectTypeId" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.aspectTypeId"></a>

```go
AspectTypeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/dataplex_aspect_type_iam_policy#aspect_type_id DataGoogleDataplexAspectTypeIamPolicy#aspect_type_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/dataplex_aspect_type_iam_policy#id DataGoogleDataplexAspectTypeIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/dataplex_aspect_type_iam_policy#location DataGoogleDataplexAspectTypeIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleDataplexAspectTypeIamPolicy.DataGoogleDataplexAspectTypeIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/dataplex_aspect_type_iam_policy#project DataGoogleDataplexAspectTypeIamPolicy#project}.

---



