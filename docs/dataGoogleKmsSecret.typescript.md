# `data_google_kms_secret`

Refer to the Terraform Registory for docs: [`data_google_kms_secret`](https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/data-sources/kms_secret).

# `dataGoogleKmsSecret` Submodule <a name="`dataGoogleKmsSecret` Submodule" id="@cdktf/provider-google.dataGoogleKmsSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleKmsSecret <a name="DataGoogleKmsSecret" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/data-sources/kms_secret google_kms_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.Initializer"></a>

```typescript
import { dataGoogleKmsSecret } from '@cdktf/provider-google'

new dataGoogleKmsSecret.DataGoogleKmsSecret(scope: Construct, id: string, config: DataGoogleKmsSecretConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecretConfig">DataGoogleKmsSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecretConfig">DataGoogleKmsSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.resetAdditionalAuthenticatedData">resetAdditionalAuthenticatedData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAdditionalAuthenticatedData` <a name="resetAdditionalAuthenticatedData" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.resetAdditionalAuthenticatedData"></a>

```typescript
public resetAdditionalAuthenticatedData(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.isConstruct"></a>

```typescript
import { dataGoogleKmsSecret } from '@cdktf/provider-google'

dataGoogleKmsSecret.DataGoogleKmsSecret.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.isTerraformElement"></a>

```typescript
import { dataGoogleKmsSecret } from '@cdktf/provider-google'

dataGoogleKmsSecret.DataGoogleKmsSecret.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.isTerraformDataSource"></a>

```typescript
import { dataGoogleKmsSecret } from '@cdktf/provider-google'

dataGoogleKmsSecret.DataGoogleKmsSecret.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.plaintext">plaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.additionalAuthenticatedDataInput">additionalAuthenticatedDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.ciphertextInput">ciphertextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.cryptoKeyInput">cryptoKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.additionalAuthenticatedData">additionalAuthenticatedData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.ciphertext">ciphertext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.cryptoKey">cryptoKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.plaintext"></a>

```typescript
public readonly plaintext: string;
```

- *Type:* string

---

##### `additionalAuthenticatedDataInput`<sup>Optional</sup> <a name="additionalAuthenticatedDataInput" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.additionalAuthenticatedDataInput"></a>

```typescript
public readonly additionalAuthenticatedDataInput: string;
```

- *Type:* string

---

##### `ciphertextInput`<sup>Optional</sup> <a name="ciphertextInput" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.ciphertextInput"></a>

```typescript
public readonly ciphertextInput: string;
```

- *Type:* string

---

##### `cryptoKeyInput`<sup>Optional</sup> <a name="cryptoKeyInput" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.cryptoKeyInput"></a>

```typescript
public readonly cryptoKeyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `additionalAuthenticatedData`<sup>Required</sup> <a name="additionalAuthenticatedData" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.additionalAuthenticatedData"></a>

```typescript
public readonly additionalAuthenticatedData: string;
```

- *Type:* string

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.ciphertext"></a>

```typescript
public readonly ciphertext: string;
```

- *Type:* string

---

##### `cryptoKey`<sup>Required</sup> <a name="cryptoKey" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.cryptoKey"></a>

```typescript
public readonly cryptoKey: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecret.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleKmsSecretConfig <a name="DataGoogleKmsSecretConfig" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecretConfig.Initializer"></a>

```typescript
import { dataGoogleKmsSecret } from '@cdktf/provider-google'

const dataGoogleKmsSecretConfig: dataGoogleKmsSecret.DataGoogleKmsSecretConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecretConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecretConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecretConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecretConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecretConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecretConfig.property.ciphertext">ciphertext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/data-sources/kms_secret#ciphertext DataGoogleKmsSecret#ciphertext}. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecretConfig.property.cryptoKey">cryptoKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/data-sources/kms_secret#crypto_key DataGoogleKmsSecret#crypto_key}. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecretConfig.property.additionalAuthenticatedData">additionalAuthenticatedData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/data-sources/kms_secret#additional_authenticated_data DataGoogleKmsSecret#additional_authenticated_data}. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecretConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/data-sources/kms_secret#id DataGoogleKmsSecret#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecretConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecretConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecretConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecretConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecretConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecretConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecretConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecretConfig.property.ciphertext"></a>

```typescript
public readonly ciphertext: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/data-sources/kms_secret#ciphertext DataGoogleKmsSecret#ciphertext}.

---

##### `cryptoKey`<sup>Required</sup> <a name="cryptoKey" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecretConfig.property.cryptoKey"></a>

```typescript
public readonly cryptoKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/data-sources/kms_secret#crypto_key DataGoogleKmsSecret#crypto_key}.

---

##### `additionalAuthenticatedData`<sup>Optional</sup> <a name="additionalAuthenticatedData" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecretConfig.property.additionalAuthenticatedData"></a>

```typescript
public readonly additionalAuthenticatedData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/data-sources/kms_secret#additional_authenticated_data DataGoogleKmsSecret#additional_authenticated_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleKmsSecret.DataGoogleKmsSecretConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/data-sources/kms_secret#id DataGoogleKmsSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



