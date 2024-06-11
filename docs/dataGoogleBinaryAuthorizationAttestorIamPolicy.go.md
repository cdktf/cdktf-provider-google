# `dataGoogleBinaryAuthorizationAttestorIamPolicy` Submodule <a name="`dataGoogleBinaryAuthorizationAttestorIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBinaryAuthorizationAttestorIamPolicy <a name="DataGoogleBinaryAuthorizationAttestorIamPolicy" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/data-sources/binary_authorization_attestor_iam_policy google_binary_authorization_attestor_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebinaryauthorizationattestoriampolicy"

datagooglebinaryauthorizationattestoriampolicy.NewDataGoogleBinaryAuthorizationAttestorIamPolicy(scope Construct, id *string, config DataGoogleBinaryAuthorizationAttestorIamPolicyConfig) DataGoogleBinaryAuthorizationAttestorIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig">DataGoogleBinaryAuthorizationAttestorIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig">DataGoogleBinaryAuthorizationAttestorIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleBinaryAuthorizationAttestorIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebinaryauthorizationattestoriampolicy"

datagooglebinaryauthorizationattestoriampolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebinaryauthorizationattestoriampolicy"

datagooglebinaryauthorizationattestoriampolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebinaryauthorizationattestoriampolicy"

datagooglebinaryauthorizationattestoriampolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebinaryauthorizationattestoriampolicy"

datagooglebinaryauthorizationattestoriampolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleBinaryAuthorizationAttestorIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleBinaryAuthorizationAttestorIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleBinaryAuthorizationAttestorIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/data-sources/binary_authorization_attestor_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleBinaryAuthorizationAttestorIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.attestorInput">AttestorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.attestor">Attestor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `AttestorInput`<sup>Optional</sup> <a name="AttestorInput" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.attestorInput"></a>

```go
func AttestorInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Attestor`<sup>Required</sup> <a name="Attestor" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.attestor"></a>

```go
func Attestor() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBinaryAuthorizationAttestorIamPolicyConfig <a name="DataGoogleBinaryAuthorizationAttestorIamPolicyConfig" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebinaryauthorizationattestoriampolicy"

&datagooglebinaryauthorizationattestoriampolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Attestor: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.attestor">Attestor</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/data-sources/binary_authorization_attestor_iam_policy#attestor DataGoogleBinaryAuthorizationAttestorIamPolicy#attestor}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/data-sources/binary_authorization_attestor_iam_policy#id DataGoogleBinaryAuthorizationAttestorIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/data-sources/binary_authorization_attestor_iam_policy#project DataGoogleBinaryAuthorizationAttestorIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Attestor`<sup>Required</sup> <a name="Attestor" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.attestor"></a>

```go
Attestor *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/data-sources/binary_authorization_attestor_iam_policy#attestor DataGoogleBinaryAuthorizationAttestorIamPolicy#attestor}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/data-sources/binary_authorization_attestor_iam_policy#id DataGoogleBinaryAuthorizationAttestorIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/data-sources/binary_authorization_attestor_iam_policy#project DataGoogleBinaryAuthorizationAttestorIamPolicy#project}.

---



