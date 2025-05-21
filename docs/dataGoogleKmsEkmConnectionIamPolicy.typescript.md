# `dataGoogleKmsEkmConnectionIamPolicy` Submodule <a name="`dataGoogleKmsEkmConnectionIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleKmsEkmConnectionIamPolicy <a name="DataGoogleKmsEkmConnectionIamPolicy" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/kms_ekm_connection_iam_policy google_kms_ekm_connection_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.Initializer"></a>

```typescript
import { dataGoogleKmsEkmConnectionIamPolicy } from '@cdktf/provider-google'

new dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy(scope: Construct, id: string, config: DataGoogleKmsEkmConnectionIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicyConfig">DataGoogleKmsEkmConnectionIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicyConfig">DataGoogleKmsEkmConnectionIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleKmsEkmConnectionIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.isConstruct"></a>

```typescript
import { dataGoogleKmsEkmConnectionIamPolicy } from '@cdktf/provider-google'

dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.isTerraformElement"></a>

```typescript
import { dataGoogleKmsEkmConnectionIamPolicy } from '@cdktf/provider-google'

dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.isTerraformDataSource"></a>

```typescript
import { dataGoogleKmsEkmConnectionIamPolicy } from '@cdktf/provider-google'

dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.generateConfigForImport"></a>

```typescript
import { dataGoogleKmsEkmConnectionIamPolicy } from '@cdktf/provider-google'

dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleKmsEkmConnectionIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleKmsEkmConnectionIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleKmsEkmConnectionIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/kms_ekm_connection_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleKmsEkmConnectionIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleKmsEkmConnectionIamPolicyConfig <a name="DataGoogleKmsEkmConnectionIamPolicyConfig" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicyConfig.Initializer"></a>

```typescript
import { dataGoogleKmsEkmConnectionIamPolicy } from '@cdktf/provider-google'

const dataGoogleKmsEkmConnectionIamPolicyConfig: dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/kms_ekm_connection_iam_policy#name DataGoogleKmsEkmConnectionIamPolicy#name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/kms_ekm_connection_iam_policy#id DataGoogleKmsEkmConnectionIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicyConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/kms_ekm_connection_iam_policy#location DataGoogleKmsEkmConnectionIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/kms_ekm_connection_iam_policy#project DataGoogleKmsEkmConnectionIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/kms_ekm_connection_iam_policy#name DataGoogleKmsEkmConnectionIamPolicy#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/kms_ekm_connection_iam_policy#id DataGoogleKmsEkmConnectionIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/kms_ekm_connection_iam_policy#location DataGoogleKmsEkmConnectionIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleKmsEkmConnectionIamPolicy.DataGoogleKmsEkmConnectionIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/kms_ekm_connection_iam_policy#project DataGoogleKmsEkmConnectionIamPolicy#project}.

---



