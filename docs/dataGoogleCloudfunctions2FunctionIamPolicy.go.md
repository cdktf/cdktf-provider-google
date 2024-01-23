# `dataGoogleCloudfunctions2FunctionIamPolicy` Submodule <a name="`dataGoogleCloudfunctions2FunctionIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudfunctions2FunctionIamPolicy <a name="DataGoogleCloudfunctions2FunctionIamPolicy" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/cloudfunctions2_function_iam_policy google_cloudfunctions2_function_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2functioniampolicy"

datagooglecloudfunctions2functioniampolicy.NewDataGoogleCloudfunctions2FunctionIamPolicy(scope Construct, id *string, config DataGoogleCloudfunctions2FunctionIamPolicyConfig) DataGoogleCloudfunctions2FunctionIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicyConfig">DataGoogleCloudfunctions2FunctionIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicyConfig">DataGoogleCloudfunctions2FunctionIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleCloudfunctions2FunctionIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2functioniampolicy"

datagooglecloudfunctions2functioniampolicy.DataGoogleCloudfunctions2FunctionIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2functioniampolicy"

datagooglecloudfunctions2functioniampolicy.DataGoogleCloudfunctions2FunctionIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2functioniampolicy"

datagooglecloudfunctions2functioniampolicy.DataGoogleCloudfunctions2FunctionIamPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2functioniampolicy"

datagooglecloudfunctions2functioniampolicy.DataGoogleCloudfunctions2FunctionIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleCloudfunctions2FunctionIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleCloudfunctions2FunctionIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleCloudfunctions2FunctionIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/cloudfunctions2_function_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudfunctions2FunctionIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.cloudFunctionInput">CloudFunctionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.cloudFunction">CloudFunction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `CloudFunctionInput`<sup>Optional</sup> <a name="CloudFunctionInput" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.cloudFunctionInput"></a>

```go
func CloudFunctionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `CloudFunction`<sup>Required</sup> <a name="CloudFunction" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.cloudFunction"></a>

```go
func CloudFunction() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudfunctions2FunctionIamPolicyConfig <a name="DataGoogleCloudfunctions2FunctionIamPolicyConfig" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2functioniampolicy"

&datagooglecloudfunctions2functioniampolicy.DataGoogleCloudfunctions2FunctionIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CloudFunction: *string,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicyConfig.property.cloudFunction">CloudFunction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/cloudfunctions2_function_iam_policy#cloud_function DataGoogleCloudfunctions2FunctionIamPolicy#cloud_function}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/cloudfunctions2_function_iam_policy#id DataGoogleCloudfunctions2FunctionIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicyConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/cloudfunctions2_function_iam_policy#location DataGoogleCloudfunctions2FunctionIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/cloudfunctions2_function_iam_policy#project DataGoogleCloudfunctions2FunctionIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudFunction`<sup>Required</sup> <a name="CloudFunction" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicyConfig.property.cloudFunction"></a>

```go
CloudFunction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/cloudfunctions2_function_iam_policy#cloud_function DataGoogleCloudfunctions2FunctionIamPolicy#cloud_function}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/cloudfunctions2_function_iam_policy#id DataGoogleCloudfunctions2FunctionIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/cloudfunctions2_function_iam_policy#location DataGoogleCloudfunctions2FunctionIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleCloudfunctions2FunctionIamPolicy.DataGoogleCloudfunctions2FunctionIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/cloudfunctions2_function_iam_policy#project DataGoogleCloudfunctions2FunctionIamPolicy#project}.

---



