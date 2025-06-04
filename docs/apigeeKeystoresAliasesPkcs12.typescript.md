# `apigeeKeystoresAliasesPkcs12` Submodule <a name="`apigeeKeystoresAliasesPkcs12` Submodule" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeKeystoresAliasesPkcs12 <a name="ApigeeKeystoresAliasesPkcs12" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_keystores_aliases_pkcs12 google_apigee_keystores_aliases_pkcs12}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer"></a>

```typescript
import { apigeeKeystoresAliasesPkcs12 } from '@cdktf/provider-google'

new apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12(scope: Construct, id: string, config: ApigeeKeystoresAliasesPkcs12Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config">ApigeeKeystoresAliasesPkcs12Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config">ApigeeKeystoresAliasesPkcs12Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.putTimeouts"></a>

```typescript
public putTimeouts(value: ApigeeKeystoresAliasesPkcs12Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Timeouts">ApigeeKeystoresAliasesPkcs12Timeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeKeystoresAliasesPkcs12 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.isConstruct"></a>

```typescript
import { apigeeKeystoresAliasesPkcs12 } from '@cdktf/provider-google'

apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.isTerraformElement"></a>

```typescript
import { apigeeKeystoresAliasesPkcs12 } from '@cdktf/provider-google'

apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.isTerraformResource"></a>

```typescript
import { apigeeKeystoresAliasesPkcs12 } from '@cdktf/provider-google'

apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.generateConfigForImport"></a>

```typescript
import { apigeeKeystoresAliasesPkcs12 } from '@cdktf/provider-google'

apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApigeeKeystoresAliasesPkcs12 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigeeKeystoresAliasesPkcs12 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigeeKeystoresAliasesPkcs12 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_keystores_aliases_pkcs12#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeKeystoresAliasesPkcs12 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.certsInfo">certsInfo</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList">ApigeeKeystoresAliasesPkcs12CertsInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference">ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.filehashInput">filehashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.fileInput">fileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.keystoreInput">keystoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Timeouts">ApigeeKeystoresAliasesPkcs12Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.file">file</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.filehash">filehash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.keystore">keystore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.password">password</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certsInfo`<sup>Required</sup> <a name="certsInfo" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.certsInfo"></a>

```typescript
public readonly certsInfo: ApigeeKeystoresAliasesPkcs12CertsInfoList;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList">ApigeeKeystoresAliasesPkcs12CertsInfoList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference">ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `filehashInput`<sup>Optional</sup> <a name="filehashInput" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.filehashInput"></a>

```typescript
public readonly filehashInput: string;
```

- *Type:* string

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.fileInput"></a>

```typescript
public readonly fileInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keystoreInput`<sup>Optional</sup> <a name="keystoreInput" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.keystoreInput"></a>

```typescript
public readonly keystoreInput: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApigeeKeystoresAliasesPkcs12Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Timeouts">ApigeeKeystoresAliasesPkcs12Timeouts</a>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

---

##### `filehash`<sup>Required</sup> <a name="filehash" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.filehash"></a>

```typescript
public readonly filehash: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keystore`<sup>Required</sup> <a name="keystore" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.keystore"></a>

```typescript
public readonly keystore: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeKeystoresAliasesPkcs12CertsInfo <a name="ApigeeKeystoresAliasesPkcs12CertsInfo" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfo.Initializer"></a>

```typescript
import { apigeeKeystoresAliasesPkcs12 } from '@cdktf/provider-google'

const apigeeKeystoresAliasesPkcs12CertsInfo: apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfo = { ... }
```


### ApigeeKeystoresAliasesPkcs12CertsInfoCertInfo <a name="ApigeeKeystoresAliasesPkcs12CertsInfoCertInfo" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfo.Initializer"></a>

```typescript
import { apigeeKeystoresAliasesPkcs12 } from '@cdktf/provider-google'

const apigeeKeystoresAliasesPkcs12CertsInfoCertInfo: apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfo = { ... }
```


### ApigeeKeystoresAliasesPkcs12Config <a name="ApigeeKeystoresAliasesPkcs12Config" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.Initializer"></a>

```typescript
import { apigeeKeystoresAliasesPkcs12 } from '@cdktf/provider-google'

const apigeeKeystoresAliasesPkcs12Config: apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.alias">alias</a></code> | <code>string</code> | Alias Name. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.environment">environment</a></code> | <code>string</code> | Environment associated with the alias. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.file">file</a></code> | <code>string</code> | Cert content. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.filehash">filehash</a></code> | <code>string</code> | Hash of the pkcs file. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.keystore">keystore</a></code> | <code>string</code> | Keystore Name. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.orgId">orgId</a></code> | <code>string</code> | Organization ID associated with the alias. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_keystores_aliases_pkcs12#id ApigeeKeystoresAliasesPkcs12#id}. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.password">password</a></code> | <code>string</code> | Password for the Private Key if it's encrypted. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Timeouts">ApigeeKeystoresAliasesPkcs12Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_keystores_aliases_pkcs12#alias ApigeeKeystoresAliasesPkcs12#alias}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

Environment associated with the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_keystores_aliases_pkcs12#environment ApigeeKeystoresAliasesPkcs12#environment}

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

Cert content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_keystores_aliases_pkcs12#file ApigeeKeystoresAliasesPkcs12#file}

---

##### `filehash`<sup>Required</sup> <a name="filehash" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.filehash"></a>

```typescript
public readonly filehash: string;
```

- *Type:* string

Hash of the pkcs file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_keystores_aliases_pkcs12#filehash ApigeeKeystoresAliasesPkcs12#filehash}

---

##### `keystore`<sup>Required</sup> <a name="keystore" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.keystore"></a>

```typescript
public readonly keystore: string;
```

- *Type:* string

Keystore Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_keystores_aliases_pkcs12#keystore ApigeeKeystoresAliasesPkcs12#keystore}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

Organization ID associated with the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_keystores_aliases_pkcs12#org_id ApigeeKeystoresAliasesPkcs12#org_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_keystores_aliases_pkcs12#id ApigeeKeystoresAliasesPkcs12#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for the Private Key if it's encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_keystores_aliases_pkcs12#password ApigeeKeystoresAliasesPkcs12#password}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Config.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeKeystoresAliasesPkcs12Timeouts;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Timeouts">ApigeeKeystoresAliasesPkcs12Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_keystores_aliases_pkcs12#timeouts ApigeeKeystoresAliasesPkcs12#timeouts}

---

### ApigeeKeystoresAliasesPkcs12Timeouts <a name="ApigeeKeystoresAliasesPkcs12Timeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Timeouts.Initializer"></a>

```typescript
import { apigeeKeystoresAliasesPkcs12 } from '@cdktf/provider-google'

const apigeeKeystoresAliasesPkcs12Timeouts: apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_keystores_aliases_pkcs12#create ApigeeKeystoresAliasesPkcs12#create}. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_keystores_aliases_pkcs12#delete ApigeeKeystoresAliasesPkcs12#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_keystores_aliases_pkcs12#create ApigeeKeystoresAliasesPkcs12#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apigee_keystores_aliases_pkcs12#delete ApigeeKeystoresAliasesPkcs12#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList <a name="ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.Initializer"></a>

```typescript
import { apigeeKeystoresAliasesPkcs12 } from '@cdktf/provider-google'

new apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.get"></a>

```typescript
public get(index: number): ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference <a name="ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.Initializer"></a>

```typescript
import { apigeeKeystoresAliasesPkcs12 } from '@cdktf/provider-google'

new apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.basicConstraints">basicConstraints</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.expiryDate">expiryDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.isValid">isValid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.sigAlgName">sigAlgName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.validFrom">validFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfo">ApigeeKeystoresAliasesPkcs12CertsInfoCertInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `basicConstraints`<sup>Required</sup> <a name="basicConstraints" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.basicConstraints"></a>

```typescript
public readonly basicConstraints: string;
```

- *Type:* string

---

##### `expiryDate`<sup>Required</sup> <a name="expiryDate" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.expiryDate"></a>

```typescript
public readonly expiryDate: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `isValid`<sup>Required</sup> <a name="isValid" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.isValid"></a>

```typescript
public readonly isValid: string;
```

- *Type:* string

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `sigAlgName`<sup>Required</sup> <a name="sigAlgName" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.sigAlgName"></a>

```typescript
public readonly sigAlgName: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `subjectAlternativeNames`<sup>Required</sup> <a name="subjectAlternativeNames" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.subjectAlternativeNames"></a>

```typescript
public readonly subjectAlternativeNames: string[];
```

- *Type:* string[]

---

##### `validFrom`<sup>Required</sup> <a name="validFrom" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.validFrom"></a>

```typescript
public readonly validFrom: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApigeeKeystoresAliasesPkcs12CertsInfoCertInfo;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfo">ApigeeKeystoresAliasesPkcs12CertsInfoCertInfo</a>

---


### ApigeeKeystoresAliasesPkcs12CertsInfoList <a name="ApigeeKeystoresAliasesPkcs12CertsInfoList" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.Initializer"></a>

```typescript
import { apigeeKeystoresAliasesPkcs12 } from '@cdktf/provider-google'

new apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.get"></a>

```typescript
public get(index: number): ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference <a name="ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.Initializer"></a>

```typescript
import { apigeeKeystoresAliasesPkcs12 } from '@cdktf/provider-google'

new apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.property.certInfo">certInfo</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList">ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfo">ApigeeKeystoresAliasesPkcs12CertsInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certInfo`<sup>Required</sup> <a name="certInfo" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.property.certInfo"></a>

```typescript
public readonly certInfo: ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList">ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApigeeKeystoresAliasesPkcs12CertsInfo;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12CertsInfo">ApigeeKeystoresAliasesPkcs12CertsInfo</a>

---


### ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference <a name="ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.Initializer"></a>

```typescript
import { apigeeKeystoresAliasesPkcs12 } from '@cdktf/provider-google'

new apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Timeouts">ApigeeKeystoresAliasesPkcs12Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeKeystoresAliasesPkcs12Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeKeystoresAliasesPkcs12.ApigeeKeystoresAliasesPkcs12Timeouts">ApigeeKeystoresAliasesPkcs12Timeouts</a>

---



