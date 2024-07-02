# `dataGoogleKmsSecretCiphertext` Submodule <a name="`dataGoogleKmsSecretCiphertext` Submodule" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleKmsSecretCiphertext <a name="DataGoogleKmsSecretCiphertext" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/kms_secret_ciphertext google_kms_secret_ciphertext}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.Initializer"></a>

```typescript
import { dataGoogleKmsSecretCiphertext } from '@cdktf/provider-google'

new dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext(scope: Construct, id: string, config: DataGoogleKmsSecretCiphertextConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertextConfig">DataGoogleKmsSecretCiphertextConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertextConfig">DataGoogleKmsSecretCiphertextConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleKmsSecretCiphertext resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.isConstruct"></a>

```typescript
import { dataGoogleKmsSecretCiphertext } from '@cdktf/provider-google'

dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.isTerraformElement"></a>

```typescript
import { dataGoogleKmsSecretCiphertext } from '@cdktf/provider-google'

dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.isTerraformDataSource"></a>

```typescript
import { dataGoogleKmsSecretCiphertext } from '@cdktf/provider-google'

dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.generateConfigForImport"></a>

```typescript
import { dataGoogleKmsSecretCiphertext } from '@cdktf/provider-google'

dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleKmsSecretCiphertext resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleKmsSecretCiphertext to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleKmsSecretCiphertext that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/kms_secret_ciphertext#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleKmsSecretCiphertext to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.ciphertext">ciphertext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.cryptoKeyInput">cryptoKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.plaintextInput">plaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.cryptoKey">cryptoKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.plaintext">plaintext</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.ciphertext"></a>

```typescript
public readonly ciphertext: string;
```

- *Type:* string

---

##### `cryptoKeyInput`<sup>Optional</sup> <a name="cryptoKeyInput" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.cryptoKeyInput"></a>

```typescript
public readonly cryptoKeyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `plaintextInput`<sup>Optional</sup> <a name="plaintextInput" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.plaintextInput"></a>

```typescript
public readonly plaintextInput: string;
```

- *Type:* string

---

##### `cryptoKey`<sup>Required</sup> <a name="cryptoKey" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.cryptoKey"></a>

```typescript
public readonly cryptoKey: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.plaintext"></a>

```typescript
public readonly plaintext: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertext.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleKmsSecretCiphertextConfig <a name="DataGoogleKmsSecretCiphertextConfig" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertextConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertextConfig.Initializer"></a>

```typescript
import { dataGoogleKmsSecretCiphertext } from '@cdktf/provider-google'

const dataGoogleKmsSecretCiphertextConfig: dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertextConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertextConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertextConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertextConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertextConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertextConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertextConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertextConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertextConfig.property.cryptoKey">cryptoKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/kms_secret_ciphertext#crypto_key DataGoogleKmsSecretCiphertext#crypto_key}. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertextConfig.property.plaintext">plaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/kms_secret_ciphertext#plaintext DataGoogleKmsSecretCiphertext#plaintext}. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertextConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/kms_secret_ciphertext#id DataGoogleKmsSecretCiphertext#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertextConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertextConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertextConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertextConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertextConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertextConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertextConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cryptoKey`<sup>Required</sup> <a name="cryptoKey" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertextConfig.property.cryptoKey"></a>

```typescript
public readonly cryptoKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/kms_secret_ciphertext#crypto_key DataGoogleKmsSecretCiphertext#crypto_key}.

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertextConfig.property.plaintext"></a>

```typescript
public readonly plaintext: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/kms_secret_ciphertext#plaintext DataGoogleKmsSecretCiphertext#plaintext}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleKmsSecretCiphertext.DataGoogleKmsSecretCiphertextConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/data-sources/kms_secret_ciphertext#id DataGoogleKmsSecretCiphertext#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



