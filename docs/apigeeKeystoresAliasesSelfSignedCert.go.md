# `apigeeKeystoresAliasesSelfSignedCert` Submodule <a name="`apigeeKeystoresAliasesSelfSignedCert` Submodule" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeKeystoresAliasesSelfSignedCert <a name="ApigeeKeystoresAliasesSelfSignedCert" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/apigee_keystores_aliases_self_signed_cert google_apigee_keystores_aliases_self_signed_cert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeekeystoresaliasesselfsignedcert"

apigeekeystoresaliasesselfsignedcert.NewApigeeKeystoresAliasesSelfSignedCert(scope Construct, id *string, config ApigeeKeystoresAliasesSelfSignedCertConfig) ApigeeKeystoresAliasesSelfSignedCert
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig">ApigeeKeystoresAliasesSelfSignedCertConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig">ApigeeKeystoresAliasesSelfSignedCertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putSubject">PutSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putSubjectAlternativeDnsNames">PutSubjectAlternativeDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetCertValidityInDays">ResetCertValidityInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetKeySize">ResetKeySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetSubjectAlternativeDnsNames">ResetSubjectAlternativeDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutSubject` <a name="PutSubject" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putSubject"></a>

```go
func PutSubject(value ApigeeKeystoresAliasesSelfSignedCertSubject)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putSubject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject">ApigeeKeystoresAliasesSelfSignedCertSubject</a>

---

##### `PutSubjectAlternativeDnsNames` <a name="PutSubjectAlternativeDnsNames" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putSubjectAlternativeDnsNames"></a>

```go
func PutSubjectAlternativeDnsNames(value ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putSubjectAlternativeDnsNames.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putTimeouts"></a>

```go
func PutTimeouts(value ApigeeKeystoresAliasesSelfSignedCertTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts">ApigeeKeystoresAliasesSelfSignedCertTimeouts</a>

---

##### `ResetCertValidityInDays` <a name="ResetCertValidityInDays" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetCertValidityInDays"></a>

```go
func ResetCertValidityInDays()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetId"></a>

```go
func ResetId()
```

##### `ResetKeySize` <a name="ResetKeySize" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetKeySize"></a>

```go
func ResetKeySize()
```

##### `ResetSubjectAlternativeDnsNames` <a name="ResetSubjectAlternativeDnsNames" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetSubjectAlternativeDnsNames"></a>

```go
func ResetSubjectAlternativeDnsNames()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeekeystoresaliasesselfsignedcert"

apigeekeystoresaliasesselfsignedcert.ApigeeKeystoresAliasesSelfSignedCert_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeekeystoresaliasesselfsignedcert"

apigeekeystoresaliasesselfsignedcert.ApigeeKeystoresAliasesSelfSignedCert_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeekeystoresaliasesselfsignedcert"

apigeekeystoresaliasesselfsignedcert.ApigeeKeystoresAliasesSelfSignedCert_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.certsInfo">CertsInfo</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList">ApigeeKeystoresAliasesSelfSignedCertCertsInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.subject">Subject</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference">ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.subjectAlternativeDnsNames">SubjectAlternativeDnsNames</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference">ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.certValidityInDaysInput">CertValidityInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.keySizeInput">KeySizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.keystoreInput">KeystoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.orgIdInput">OrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.sigAlgInput">SigAlgInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.subjectAlternativeDnsNamesInput">SubjectAlternativeDnsNamesInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.subjectInput">SubjectInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject">ApigeeKeystoresAliasesSelfSignedCertSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.certValidityInDays">CertValidityInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.keySize">KeySize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.keystore">Keystore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.sigAlg">SigAlg</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CertsInfo`<sup>Required</sup> <a name="CertsInfo" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.certsInfo"></a>

```go
func CertsInfo() ApigeeKeystoresAliasesSelfSignedCertCertsInfoList
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList">ApigeeKeystoresAliasesSelfSignedCertCertsInfoList</a>

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.subject"></a>

```go
func Subject() ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference">ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference</a>

---

##### `SubjectAlternativeDnsNames`<sup>Required</sup> <a name="SubjectAlternativeDnsNames" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.subjectAlternativeDnsNames"></a>

```go
func SubjectAlternativeDnsNames() ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.timeouts"></a>

```go
func Timeouts() ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference">ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `CertValidityInDaysInput`<sup>Optional</sup> <a name="CertValidityInDaysInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.certValidityInDaysInput"></a>

```go
func CertValidityInDaysInput() *f64
```

- *Type:* *f64

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeySizeInput`<sup>Optional</sup> <a name="KeySizeInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.keySizeInput"></a>

```go
func KeySizeInput() *string
```

- *Type:* *string

---

##### `KeystoreInput`<sup>Optional</sup> <a name="KeystoreInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.keystoreInput"></a>

```go
func KeystoreInput() *string
```

- *Type:* *string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.orgIdInput"></a>

```go
func OrgIdInput() *string
```

- *Type:* *string

---

##### `SigAlgInput`<sup>Optional</sup> <a name="SigAlgInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.sigAlgInput"></a>

```go
func SigAlgInput() *string
```

- *Type:* *string

---

##### `SubjectAlternativeDnsNamesInput`<sup>Optional</sup> <a name="SubjectAlternativeDnsNamesInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.subjectAlternativeDnsNamesInput"></a>

```go
func SubjectAlternativeDnsNamesInput() ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a>

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.subjectInput"></a>

```go
func SubjectInput() ApigeeKeystoresAliasesSelfSignedCertSubject
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject">ApigeeKeystoresAliasesSelfSignedCertSubject</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `CertValidityInDays`<sup>Required</sup> <a name="CertValidityInDays" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.certValidityInDays"></a>

```go
func CertValidityInDays() *f64
```

- *Type:* *f64

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeySize`<sup>Required</sup> <a name="KeySize" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.keySize"></a>

```go
func KeySize() *string
```

- *Type:* *string

---

##### `Keystore`<sup>Required</sup> <a name="Keystore" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.keystore"></a>

```go
func Keystore() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

##### `SigAlg`<sup>Required</sup> <a name="SigAlg" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.sigAlg"></a>

```go
func SigAlg() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeKeystoresAliasesSelfSignedCertCertsInfo <a name="ApigeeKeystoresAliasesSelfSignedCertCertsInfo" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeekeystoresaliasesselfsignedcert"

&apigeekeystoresaliasesselfsignedcert.ApigeeKeystoresAliasesSelfSignedCertCertsInfo {

}
```


### ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo <a name="ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeekeystoresaliasesselfsignedcert"

&apigeekeystoresaliasesselfsignedcert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo {

}
```


### ApigeeKeystoresAliasesSelfSignedCertConfig <a name="ApigeeKeystoresAliasesSelfSignedCertConfig" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeekeystoresaliasesselfsignedcert"

&apigeekeystoresaliasesselfsignedcert.ApigeeKeystoresAliasesSelfSignedCertConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Alias: *string,
	Environment: *string,
	Keystore: *string,
	OrgId: *string,
	SigAlg: *string,
	Subject: github.com/cdktf/cdktf-provider-google-go/google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject,
	CertValidityInDays: *f64,
	Id: *string,
	KeySize: *string,
	SubjectAlternativeDnsNames: github.com/cdktf/cdktf-provider-google-go/google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias for the key/certificate pair. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.environment">Environment</a></code> | <code>*string</code> | The Apigee environment name. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.keystore">Keystore</a></code> | <code>*string</code> | The Apigee keystore name associated in an Apigee environment. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.orgId">OrgId</a></code> | <code>*string</code> | The Apigee Organization name associated with the Apigee environment. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.sigAlg">SigAlg</a></code> | <code>*string</code> | Signature algorithm to generate private key. Valid values are SHA512withRSA, SHA384withRSA, and SHA256withRSA. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.subject">Subject</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject">ApigeeKeystoresAliasesSelfSignedCertSubject</a></code> | subject block. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.certValidityInDays">CertValidityInDays</a></code> | <code>*f64</code> | Validity duration of certificate, in days. Accepts positive non-zero value. Defaults to 365. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_keystores_aliases_self_signed_cert#id ApigeeKeystoresAliasesSelfSignedCert#id}. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.keySize">KeySize</a></code> | <code>*string</code> | Key size. Default and maximum value is 2048 bits. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.subjectAlternativeDnsNames">SubjectAlternativeDnsNames</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a></code> | subject_alternative_dns_names block. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts">ApigeeKeystoresAliasesSelfSignedCertTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias for the key/certificate pair.

Values must match the regular expression [\w\s-.]{1,255}.
This must be provided for all formats except selfsignedcert; self-signed certs may specify the alias in either
this parameter or the JSON body.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_keystores_aliases_self_signed_cert#alias ApigeeKeystoresAliasesSelfSignedCert#alias}

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

The Apigee environment name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_keystores_aliases_self_signed_cert#environment ApigeeKeystoresAliasesSelfSignedCert#environment}

---

##### `Keystore`<sup>Required</sup> <a name="Keystore" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.keystore"></a>

```go
Keystore *string
```

- *Type:* *string

The Apigee keystore name associated in an Apigee environment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_keystores_aliases_self_signed_cert#keystore ApigeeKeystoresAliasesSelfSignedCert#keystore}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.orgId"></a>

```go
OrgId *string
```

- *Type:* *string

The Apigee Organization name associated with the Apigee environment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_keystores_aliases_self_signed_cert#org_id ApigeeKeystoresAliasesSelfSignedCert#org_id}

---

##### `SigAlg`<sup>Required</sup> <a name="SigAlg" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.sigAlg"></a>

```go
SigAlg *string
```

- *Type:* *string

Signature algorithm to generate private key. Valid values are SHA512withRSA, SHA384withRSA, and SHA256withRSA.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_keystores_aliases_self_signed_cert#sig_alg ApigeeKeystoresAliasesSelfSignedCert#sig_alg}

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.subject"></a>

```go
Subject ApigeeKeystoresAliasesSelfSignedCertSubject
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject">ApigeeKeystoresAliasesSelfSignedCertSubject</a>

subject block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_keystores_aliases_self_signed_cert#subject ApigeeKeystoresAliasesSelfSignedCert#subject}

---

##### `CertValidityInDays`<sup>Optional</sup> <a name="CertValidityInDays" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.certValidityInDays"></a>

```go
CertValidityInDays *f64
```

- *Type:* *f64

Validity duration of certificate, in days. Accepts positive non-zero value. Defaults to 365.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_keystores_aliases_self_signed_cert#cert_validity_in_days ApigeeKeystoresAliasesSelfSignedCert#cert_validity_in_days}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_keystores_aliases_self_signed_cert#id ApigeeKeystoresAliasesSelfSignedCert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeySize`<sup>Optional</sup> <a name="KeySize" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.keySize"></a>

```go
KeySize *string
```

- *Type:* *string

Key size. Default and maximum value is 2048 bits.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_keystores_aliases_self_signed_cert#key_size ApigeeKeystoresAliasesSelfSignedCert#key_size}

---

##### `SubjectAlternativeDnsNames`<sup>Optional</sup> <a name="SubjectAlternativeDnsNames" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.subjectAlternativeDnsNames"></a>

```go
SubjectAlternativeDnsNames ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a>

subject_alternative_dns_names block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_keystores_aliases_self_signed_cert#subject_alternative_dns_names ApigeeKeystoresAliasesSelfSignedCert#subject_alternative_dns_names}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.timeouts"></a>

```go
Timeouts ApigeeKeystoresAliasesSelfSignedCertTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts">ApigeeKeystoresAliasesSelfSignedCertTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_keystores_aliases_self_signed_cert#timeouts ApigeeKeystoresAliasesSelfSignedCert#timeouts}

---

### ApigeeKeystoresAliasesSelfSignedCertSubject <a name="ApigeeKeystoresAliasesSelfSignedCertSubject" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeekeystoresaliasesselfsignedcert"

&apigeekeystoresaliasesselfsignedcert.ApigeeKeystoresAliasesSelfSignedCertSubject {
	CommonName: *string,
	CountryCode: *string,
	Email: *string,
	Locality: *string,
	Org: *string,
	OrgUnit: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.commonName">CommonName</a></code> | <code>*string</code> | Common name of the organization. Maximum length is 64 characters. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.countryCode">CountryCode</a></code> | <code>*string</code> | Two-letter country code. Example, IN for India, US for United States of America. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.email">Email</a></code> | <code>*string</code> | Email address. Max 255 characters. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.locality">Locality</a></code> | <code>*string</code> | City or town name. Maximum length is 128 characters. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.org">Org</a></code> | <code>*string</code> | Organization name. Maximum length is 64 characters. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.orgUnit">OrgUnit</a></code> | <code>*string</code> | Organization team name. Maximum length is 64 characters. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.state">State</a></code> | <code>*string</code> | State or district name. Maximum length is 128 characters. |

---

##### `CommonName`<sup>Optional</sup> <a name="CommonName" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.commonName"></a>

```go
CommonName *string
```

- *Type:* *string

Common name of the organization. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_keystores_aliases_self_signed_cert#common_name ApigeeKeystoresAliasesSelfSignedCert#common_name}

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.countryCode"></a>

```go
CountryCode *string
```

- *Type:* *string

Two-letter country code. Example, IN for India, US for United States of America.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_keystores_aliases_self_signed_cert#country_code ApigeeKeystoresAliasesSelfSignedCert#country_code}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.email"></a>

```go
Email *string
```

- *Type:* *string

Email address. Max 255 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_keystores_aliases_self_signed_cert#email ApigeeKeystoresAliasesSelfSignedCert#email}

---

##### `Locality`<sup>Optional</sup> <a name="Locality" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.locality"></a>

```go
Locality *string
```

- *Type:* *string

City or town name. Maximum length is 128 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_keystores_aliases_self_signed_cert#locality ApigeeKeystoresAliasesSelfSignedCert#locality}

---

##### `Org`<sup>Optional</sup> <a name="Org" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.org"></a>

```go
Org *string
```

- *Type:* *string

Organization name. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_keystores_aliases_self_signed_cert#org ApigeeKeystoresAliasesSelfSignedCert#org}

---

##### `OrgUnit`<sup>Optional</sup> <a name="OrgUnit" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.orgUnit"></a>

```go
OrgUnit *string
```

- *Type:* *string

Organization team name. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_keystores_aliases_self_signed_cert#org_unit ApigeeKeystoresAliasesSelfSignedCert#org_unit}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.state"></a>

```go
State *string
```

- *Type:* *string

State or district name. Maximum length is 128 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_keystores_aliases_self_signed_cert#state ApigeeKeystoresAliasesSelfSignedCert#state}

---

### ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames <a name="ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeekeystoresaliasesselfsignedcert"

&apigeekeystoresaliasesselfsignedcert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames {
	SubjectAlternativeName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames.property.subjectAlternativeName">SubjectAlternativeName</a></code> | <code>*string</code> | Subject Alternative Name. |

---

##### `SubjectAlternativeName`<sup>Optional</sup> <a name="SubjectAlternativeName" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames.property.subjectAlternativeName"></a>

```go
SubjectAlternativeName *string
```

- *Type:* *string

Subject Alternative Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_keystores_aliases_self_signed_cert#subject_alternative_name ApigeeKeystoresAliasesSelfSignedCert#subject_alternative_name}

---

### ApigeeKeystoresAliasesSelfSignedCertTimeouts <a name="ApigeeKeystoresAliasesSelfSignedCertTimeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeekeystoresaliasesselfsignedcert"

&apigeekeystoresaliasesselfsignedcert.ApigeeKeystoresAliasesSelfSignedCertTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_keystores_aliases_self_signed_cert#create ApigeeKeystoresAliasesSelfSignedCert#create}. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_keystores_aliases_self_signed_cert#delete ApigeeKeystoresAliasesSelfSignedCert#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_keystores_aliases_self_signed_cert#create ApigeeKeystoresAliasesSelfSignedCert#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_keystores_aliases_self_signed_cert#delete ApigeeKeystoresAliasesSelfSignedCert#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList <a name="ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeekeystoresaliasesselfsignedcert"

apigeekeystoresaliasesselfsignedcert.NewApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.get"></a>

```go
func Get(index *f64) ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference <a name="ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeekeystoresaliasesselfsignedcert"

apigeekeystoresaliasesselfsignedcert.NewApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.basicConstraints">BasicConstraints</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.expiryDate">ExpiryDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.isValid">IsValid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.sigAlgName">SigAlgName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.subject">Subject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.validFrom">ValidFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo">ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BasicConstraints`<sup>Required</sup> <a name="BasicConstraints" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.basicConstraints"></a>

```go
func BasicConstraints() *string
```

- *Type:* *string

---

##### `ExpiryDate`<sup>Required</sup> <a name="ExpiryDate" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.expiryDate"></a>

```go
func ExpiryDate() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `IsValid`<sup>Required</sup> <a name="IsValid" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.isValid"></a>

```go
func IsValid() *string
```

- *Type:* *string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.serialNumber"></a>

```go
func SerialNumber() *string
```

- *Type:* *string

---

##### `SigAlgName`<sup>Required</sup> <a name="SigAlgName" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.sigAlgName"></a>

```go
func SigAlgName() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.subject"></a>

```go
func Subject() *string
```

- *Type:* *string

---

##### `SubjectAlternativeNames`<sup>Required</sup> <a name="SubjectAlternativeNames" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.subjectAlternativeNames"></a>

```go
func SubjectAlternativeNames() *[]*string
```

- *Type:* *[]*string

---

##### `ValidFrom`<sup>Required</sup> <a name="ValidFrom" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.validFrom"></a>

```go
func ValidFrom() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo">ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo</a>

---


### ApigeeKeystoresAliasesSelfSignedCertCertsInfoList <a name="ApigeeKeystoresAliasesSelfSignedCertCertsInfoList" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeekeystoresaliasesselfsignedcert"

apigeekeystoresaliasesselfsignedcert.NewApigeeKeystoresAliasesSelfSignedCertCertsInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigeeKeystoresAliasesSelfSignedCertCertsInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.get"></a>

```go
func Get(index *f64) ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference <a name="ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeekeystoresaliasesselfsignedcert"

apigeekeystoresaliasesselfsignedcert.NewApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.certInfo">CertInfo</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList">ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfo">ApigeeKeystoresAliasesSelfSignedCertCertsInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertInfo`<sup>Required</sup> <a name="CertInfo" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.certInfo"></a>

```go
func CertInfo() ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList">ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() ApigeeKeystoresAliasesSelfSignedCertCertsInfo
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfo">ApigeeKeystoresAliasesSelfSignedCertCertsInfo</a>

---


### ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference <a name="ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeekeystoresaliasesselfsignedcert"

apigeekeystoresaliasesselfsignedcert.NewApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.resetSubjectAlternativeName">ResetSubjectAlternativeName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubjectAlternativeName` <a name="ResetSubjectAlternativeName" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.resetSubjectAlternativeName"></a>

```go
func ResetSubjectAlternativeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.subjectAlternativeNameInput">SubjectAlternativeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.subjectAlternativeName">SubjectAlternativeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubjectAlternativeNameInput`<sup>Optional</sup> <a name="SubjectAlternativeNameInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.subjectAlternativeNameInput"></a>

```go
func SubjectAlternativeNameInput() *string
```

- *Type:* *string

---

##### `SubjectAlternativeName`<sup>Required</sup> <a name="SubjectAlternativeName" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.subjectAlternativeName"></a>

```go
func SubjectAlternativeName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a>

---


### ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference <a name="ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeekeystoresaliasesselfsignedcert"

apigeekeystoresaliasesselfsignedcert.NewApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetCommonName">ResetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetCountryCode">ResetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetLocality">ResetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetOrg">ResetOrg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetOrgUnit">ResetOrgUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommonName` <a name="ResetCommonName" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetCommonName"></a>

```go
func ResetCommonName()
```

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetCountryCode"></a>

```go
func ResetCountryCode()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetLocality` <a name="ResetLocality" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetLocality"></a>

```go
func ResetLocality()
```

##### `ResetOrg` <a name="ResetOrg" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetOrg"></a>

```go
func ResetOrg()
```

##### `ResetOrgUnit` <a name="ResetOrgUnit" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetOrgUnit"></a>

```go
func ResetOrgUnit()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetState"></a>

```go
func ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.commonNameInput">CommonNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.countryCodeInput">CountryCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.localityInput">LocalityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgInput">OrgInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgUnitInput">OrgUnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.commonName">CommonName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.countryCode">CountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.locality">Locality</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.org">Org</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgUnit">OrgUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject">ApigeeKeystoresAliasesSelfSignedCertSubject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.commonNameInput"></a>

```go
func CommonNameInput() *string
```

- *Type:* *string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.countryCodeInput"></a>

```go
func CountryCodeInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `LocalityInput`<sup>Optional</sup> <a name="LocalityInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.localityInput"></a>

```go
func LocalityInput() *string
```

- *Type:* *string

---

##### `OrgInput`<sup>Optional</sup> <a name="OrgInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgInput"></a>

```go
func OrgInput() *string
```

- *Type:* *string

---

##### `OrgUnitInput`<sup>Optional</sup> <a name="OrgUnitInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgUnitInput"></a>

```go
func OrgUnitInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.commonName"></a>

```go
func CommonName() *string
```

- *Type:* *string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.countryCode"></a>

```go
func CountryCode() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Locality`<sup>Required</sup> <a name="Locality" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.locality"></a>

```go
func Locality() *string
```

- *Type:* *string

---

##### `Org`<sup>Required</sup> <a name="Org" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.org"></a>

```go
func Org() *string
```

- *Type:* *string

---

##### `OrgUnit`<sup>Required</sup> <a name="OrgUnit" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgUnit"></a>

```go
func OrgUnit() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.internalValue"></a>

```go
func InternalValue() ApigeeKeystoresAliasesSelfSignedCertSubject
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject">ApigeeKeystoresAliasesSelfSignedCertSubject</a>

---


### ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference <a name="ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeekeystoresaliasesselfsignedcert"

apigeekeystoresaliasesselfsignedcert.NewApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



