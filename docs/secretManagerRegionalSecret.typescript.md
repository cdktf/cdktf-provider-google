# `secretManagerRegionalSecret` Submodule <a name="`secretManagerRegionalSecret` Submodule" id="@cdktf/provider-google.secretManagerRegionalSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretManagerRegionalSecret <a name="SecretManagerRegionalSecret" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secret_manager_regional_secret google_secret_manager_regional_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer"></a>

```typescript
import { secretManagerRegionalSecret } from '@cdktf/provider-google'

new secretManagerRegionalSecret.SecretManagerRegionalSecret(scope: Construct, id: string, config: SecretManagerRegionalSecretConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig">SecretManagerRegionalSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig">SecretManagerRegionalSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.putCustomerManagedEncryption">putCustomerManagedEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.putRotation">putRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.putTopics">putTopics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetCustomerManagedEncryption">resetCustomerManagedEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetExpireTime">resetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetRotation">resetRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetTopics">resetTopics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetVersionAliases">resetVersionAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetVersionDestroyTtl">resetVersionDestroyTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomerManagedEncryption` <a name="putCustomerManagedEncryption" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.putCustomerManagedEncryption"></a>

```typescript
public putCustomerManagedEncryption(value: SecretManagerRegionalSecretCustomerManagedEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.putCustomerManagedEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryption">SecretManagerRegionalSecretCustomerManagedEncryption</a>

---

##### `putRotation` <a name="putRotation" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.putRotation"></a>

```typescript
public putRotation(value: SecretManagerRegionalSecretRotation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.putRotation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotation">SecretManagerRegionalSecretRotation</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.putTimeouts"></a>

```typescript
public putTimeouts(value: SecretManagerRegionalSecretTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts">SecretManagerRegionalSecretTimeouts</a>

---

##### `putTopics` <a name="putTopics" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.putTopics"></a>

```typescript
public putTopics(value: IResolvable | SecretManagerRegionalSecretTopics[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.putTopics.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopics">SecretManagerRegionalSecretTopics</a>[]

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetCustomerManagedEncryption` <a name="resetCustomerManagedEncryption" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetCustomerManagedEncryption"></a>

```typescript
public resetCustomerManagedEncryption(): void
```

##### `resetExpireTime` <a name="resetExpireTime" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetExpireTime"></a>

```typescript
public resetExpireTime(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRotation` <a name="resetRotation" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetRotation"></a>

```typescript
public resetRotation(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTopics` <a name="resetTopics" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetTopics"></a>

```typescript
public resetTopics(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetTtl"></a>

```typescript
public resetTtl(): void
```

##### `resetVersionAliases` <a name="resetVersionAliases" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetVersionAliases"></a>

```typescript
public resetVersionAliases(): void
```

##### `resetVersionDestroyTtl` <a name="resetVersionDestroyTtl" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.resetVersionDestroyTtl"></a>

```typescript
public resetVersionDestroyTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecretManagerRegionalSecret resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.isConstruct"></a>

```typescript
import { secretManagerRegionalSecret } from '@cdktf/provider-google'

secretManagerRegionalSecret.SecretManagerRegionalSecret.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.isTerraformElement"></a>

```typescript
import { secretManagerRegionalSecret } from '@cdktf/provider-google'

secretManagerRegionalSecret.SecretManagerRegionalSecret.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.isTerraformResource"></a>

```typescript
import { secretManagerRegionalSecret } from '@cdktf/provider-google'

secretManagerRegionalSecret.SecretManagerRegionalSecret.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.generateConfigForImport"></a>

```typescript
import { secretManagerRegionalSecret } from '@cdktf/provider-google'

secretManagerRegionalSecret.SecretManagerRegionalSecret.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SecretManagerRegionalSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretManagerRegionalSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretManagerRegionalSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secret_manager_regional_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecretManagerRegionalSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.customerManagedEncryption">customerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference">SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.rotation">rotation</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference">SecretManagerRegionalSecretRotationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference">SecretManagerRegionalSecretTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.topics">topics</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList">SecretManagerRegionalSecretTopicsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.customerManagedEncryptionInput">customerManagedEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryption">SecretManagerRegionalSecretCustomerManagedEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.expireTimeInput">expireTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.rotationInput">rotationInput</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotation">SecretManagerRegionalSecretRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts">SecretManagerRegionalSecretTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.topicsInput">topicsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopics">SecretManagerRegionalSecretTopics</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.ttlInput">ttlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.versionAliasesInput">versionAliasesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.versionDestroyTtlInput">versionDestroyTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.versionAliases">versionAliases</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.versionDestroyTtl">versionDestroyTtl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `customerManagedEncryption`<sup>Required</sup> <a name="customerManagedEncryption" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.customerManagedEncryption"></a>

```typescript
public readonly customerManagedEncryption: SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference">SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference</a>

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rotation`<sup>Required</sup> <a name="rotation" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.rotation"></a>

```typescript
public readonly rotation: SecretManagerRegionalSecretRotationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference">SecretManagerRegionalSecretRotationOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.timeouts"></a>

```typescript
public readonly timeouts: SecretManagerRegionalSecretTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference">SecretManagerRegionalSecretTimeoutsOutputReference</a>

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.topics"></a>

```typescript
public readonly topics: SecretManagerRegionalSecretTopicsList;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList">SecretManagerRegionalSecretTopicsList</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `customerManagedEncryptionInput`<sup>Optional</sup> <a name="customerManagedEncryptionInput" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.customerManagedEncryptionInput"></a>

```typescript
public readonly customerManagedEncryptionInput: SecretManagerRegionalSecretCustomerManagedEncryption;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryption">SecretManagerRegionalSecretCustomerManagedEncryption</a>

---

##### `expireTimeInput`<sup>Optional</sup> <a name="expireTimeInput" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.expireTimeInput"></a>

```typescript
public readonly expireTimeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `rotationInput`<sup>Optional</sup> <a name="rotationInput" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.rotationInput"></a>

```typescript
public readonly rotationInput: SecretManagerRegionalSecretRotation;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotation">SecretManagerRegionalSecretRotation</a>

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SecretManagerRegionalSecretTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts">SecretManagerRegionalSecretTimeouts</a>

---

##### `topicsInput`<sup>Optional</sup> <a name="topicsInput" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.topicsInput"></a>

```typescript
public readonly topicsInput: IResolvable | SecretManagerRegionalSecretTopics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopics">SecretManagerRegionalSecretTopics</a>[]

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.ttlInput"></a>

```typescript
public readonly ttlInput: string;
```

- *Type:* string

---

##### `versionAliasesInput`<sup>Optional</sup> <a name="versionAliasesInput" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.versionAliasesInput"></a>

```typescript
public readonly versionAliasesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `versionDestroyTtlInput`<sup>Optional</sup> <a name="versionDestroyTtlInput" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.versionDestroyTtlInput"></a>

```typescript
public readonly versionDestroyTtlInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

##### `versionAliases`<sup>Required</sup> <a name="versionAliases" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.versionAliases"></a>

```typescript
public readonly versionAliases: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `versionDestroyTtl`<sup>Required</sup> <a name="versionDestroyTtl" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.versionDestroyTtl"></a>

```typescript
public readonly versionDestroyTtl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecret.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretManagerRegionalSecretConfig <a name="SecretManagerRegionalSecretConfig" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.Initializer"></a>

```typescript
import { secretManagerRegionalSecret } from '@cdktf/provider-google'

const secretManagerRegionalSecretConfig: secretManagerRegionalSecret.SecretManagerRegionalSecretConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.location">location</a></code> | <code>string</code> | The location of the regional secret. eg us-central1. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.secretId">secretId</a></code> | <code>string</code> | This must be unique within the project. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Custom metadata about the regional secret. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.customerManagedEncryption">customerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryption">SecretManagerRegionalSecretCustomerManagedEncryption</a></code> | customer_managed_encryption block. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.expireTime">expireTime</a></code> | <code>string</code> | Timestamp in UTC when the regional secret is scheduled to expire. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secret_manager_regional_secret#id SecretManagerRegionalSecret#id}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels assigned to this regional secret. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secret_manager_regional_secret#project SecretManagerRegionalSecret#project}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.rotation">rotation</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotation">SecretManagerRegionalSecretRotation</a></code> | rotation block. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts">SecretManagerRegionalSecretTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.topics">topics</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopics">SecretManagerRegionalSecretTopics</a>[]</code> | topics block. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.ttl">ttl</a></code> | <code>string</code> | The TTL for the regional secret. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.versionAliases">versionAliases</a></code> | <code>{[ key: string ]: string}</code> | Mapping from version alias to version name. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.versionDestroyTtl">versionDestroyTtl</a></code> | <code>string</code> | Secret Version TTL after destruction request. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the regional secret. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secret_manager_regional_secret#location SecretManagerRegionalSecret#location}

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secret_manager_regional_secret#secret_id SecretManagerRegionalSecret#secret_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Custom metadata about the regional secret.

Annotations are distinct from various forms of labels. Annotations exist to allow
client tools to store their own state information without requiring a database.

Annotation keys must be between 1 and 63 characters long, have a UTF-8 encoding of
maximum 128 bytes, begin and end with an alphanumeric character ([a-z0-9A-Z]), and
may have dashes (-), underscores (_), dots (.), and alphanumerics in between these
symbols.

The total size of annotation keys and values must be less than 16KiB.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.


**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secret_manager_regional_secret#annotations SecretManagerRegionalSecret#annotations}

---

##### `customerManagedEncryption`<sup>Optional</sup> <a name="customerManagedEncryption" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.customerManagedEncryption"></a>

```typescript
public readonly customerManagedEncryption: SecretManagerRegionalSecretCustomerManagedEncryption;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryption">SecretManagerRegionalSecretCustomerManagedEncryption</a>

customer_managed_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secret_manager_regional_secret#customer_managed_encryption SecretManagerRegionalSecret#customer_managed_encryption}

---

##### `expireTime`<sup>Optional</sup> <a name="expireTime" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

Timestamp in UTC when the regional secret is scheduled to expire.

This is always provided on
output, regardless of what was sent on input. A timestamp in RFC3339 UTC "Zulu" format, with
nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and
"2014-10-02T15:01:23.045123456Z". Only one of 'expire_time' or 'ttl' can be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secret_manager_regional_secret#expire_time SecretManagerRegionalSecret#expire_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secret_manager_regional_secret#id SecretManagerRegionalSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels assigned to this regional secret.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be assigned to a given resource.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.


**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secret_manager_regional_secret#labels SecretManagerRegionalSecret#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secret_manager_regional_secret#project SecretManagerRegionalSecret#project}.

---

##### `rotation`<sup>Optional</sup> <a name="rotation" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.rotation"></a>

```typescript
public readonly rotation: SecretManagerRegionalSecretRotation;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotation">SecretManagerRegionalSecretRotation</a>

rotation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secret_manager_regional_secret#rotation SecretManagerRegionalSecret#rotation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SecretManagerRegionalSecretTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts">SecretManagerRegionalSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secret_manager_regional_secret#timeouts SecretManagerRegionalSecret#timeouts}

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.topics"></a>

```typescript
public readonly topics: IResolvable | SecretManagerRegionalSecretTopics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopics">SecretManagerRegionalSecretTopics</a>[]

topics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secret_manager_regional_secret#topics SecretManagerRegionalSecret#topics}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

The TTL for the regional secret.

A duration in seconds with up to nine fractional digits,
terminated by 's'. Example: "3.5s". Only one of 'ttl' or 'expire_time' can be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secret_manager_regional_secret#ttl SecretManagerRegionalSecret#ttl}

---

##### `versionAliases`<sup>Optional</sup> <a name="versionAliases" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.versionAliases"></a>

```typescript
public readonly versionAliases: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Mapping from version alias to version name.

A version alias is a string with a maximum length of 63 characters and can contain
uppercase and lowercase letters, numerals, and the hyphen (-) and underscore ('_')
characters. An alias string must start with a letter and cannot be the string
'latest' or 'NEW'. No more than 50 aliases can be assigned to a given secret.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secret_manager_regional_secret#version_aliases SecretManagerRegionalSecret#version_aliases}

---

##### `versionDestroyTtl`<sup>Optional</sup> <a name="versionDestroyTtl" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretConfig.property.versionDestroyTtl"></a>

```typescript
public readonly versionDestroyTtl: string;
```

- *Type:* string

Secret Version TTL after destruction request.

This is a part of the delayed delete feature on Secret Version.
For secret with versionDestroyTtl>0, version destruction doesn't happen immediately
on calling destroy instead the version goes to a disabled state and
the actual destruction happens after this TTL expires. It must be atleast 24h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secret_manager_regional_secret#version_destroy_ttl SecretManagerRegionalSecret#version_destroy_ttl}

---

### SecretManagerRegionalSecretCustomerManagedEncryption <a name="SecretManagerRegionalSecretCustomerManagedEncryption" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryption.Initializer"></a>

```typescript
import { secretManagerRegionalSecret } from '@cdktf/provider-google'

const secretManagerRegionalSecretCustomerManagedEncryption: secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryption.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The resource name of the Cloud KMS CryptoKey used to encrypt secret payloads. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryption.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

The resource name of the Cloud KMS CryptoKey used to encrypt secret payloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secret_manager_regional_secret#kms_key_name SecretManagerRegionalSecret#kms_key_name}

---

### SecretManagerRegionalSecretRotation <a name="SecretManagerRegionalSecretRotation" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotation.Initializer"></a>

```typescript
import { secretManagerRegionalSecret } from '@cdktf/provider-google'

const secretManagerRegionalSecretRotation: secretManagerRegionalSecret.SecretManagerRegionalSecretRotation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotation.property.nextRotationTime">nextRotationTime</a></code> | <code>string</code> | Timestamp in UTC at which the Secret is scheduled to rotate. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotation.property.rotationPeriod">rotationPeriod</a></code> | <code>string</code> | The Duration between rotation notifications. |

---

##### `nextRotationTime`<sup>Optional</sup> <a name="nextRotationTime" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotation.property.nextRotationTime"></a>

```typescript
public readonly nextRotationTime: string;
```

- *Type:* string

Timestamp in UTC at which the Secret is scheduled to rotate.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secret_manager_regional_secret#next_rotation_time SecretManagerRegionalSecret#next_rotation_time}

---

##### `rotationPeriod`<sup>Optional</sup> <a name="rotationPeriod" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotation.property.rotationPeriod"></a>

```typescript
public readonly rotationPeriod: string;
```

- *Type:* string

The Duration between rotation notifications.

Must be in seconds and at least 3600s (1h)
and at most 3153600000s (100 years). If rotationPeriod is set, 'next_rotation_time' must
be set. 'next_rotation_time' will be advanced by this period when the service
automatically sends rotation notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secret_manager_regional_secret#rotation_period SecretManagerRegionalSecret#rotation_period}

---

### SecretManagerRegionalSecretTimeouts <a name="SecretManagerRegionalSecretTimeouts" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts.Initializer"></a>

```typescript
import { secretManagerRegionalSecret } from '@cdktf/provider-google'

const secretManagerRegionalSecretTimeouts: secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secret_manager_regional_secret#create SecretManagerRegionalSecret#create}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secret_manager_regional_secret#delete SecretManagerRegionalSecret#delete}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secret_manager_regional_secret#update SecretManagerRegionalSecret#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secret_manager_regional_secret#create SecretManagerRegionalSecret#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secret_manager_regional_secret#delete SecretManagerRegionalSecret#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secret_manager_regional_secret#update SecretManagerRegionalSecret#update}.

---

### SecretManagerRegionalSecretTopics <a name="SecretManagerRegionalSecretTopics" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopics.Initializer"></a>

```typescript
import { secretManagerRegionalSecret } from '@cdktf/provider-google'

const secretManagerRegionalSecretTopics: secretManagerRegionalSecret.SecretManagerRegionalSecretTopics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopics.property.name">name</a></code> | <code>string</code> | The resource name of the Pub/Sub topic that will be published to, in the following format: projects/* /topics/*. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopics.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name of the Pub/Sub topic that will be published to, in the following format: projects/* /topics/*.

For publication to succeed, the Secret Manager Service
Agent service account must have pubsub.publisher permissions on the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/secret_manager_regional_secret#name SecretManagerRegionalSecret#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference <a name="SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer"></a>

```typescript
import { secretManagerRegionalSecret } from '@cdktf/provider-google'

new secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryption">SecretManagerRegionalSecretCustomerManagedEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecretManagerRegionalSecretCustomerManagedEncryption;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretCustomerManagedEncryption">SecretManagerRegionalSecretCustomerManagedEncryption</a>

---


### SecretManagerRegionalSecretRotationOutputReference <a name="SecretManagerRegionalSecretRotationOutputReference" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.Initializer"></a>

```typescript
import { secretManagerRegionalSecret } from '@cdktf/provider-google'

new secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.resetNextRotationTime">resetNextRotationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.resetRotationPeriod">resetRotationPeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNextRotationTime` <a name="resetNextRotationTime" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.resetNextRotationTime"></a>

```typescript
public resetNextRotationTime(): void
```

##### `resetRotationPeriod` <a name="resetRotationPeriod" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.resetRotationPeriod"></a>

```typescript
public resetRotationPeriod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.property.nextRotationTimeInput">nextRotationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.property.rotationPeriodInput">rotationPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.property.nextRotationTime">nextRotationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.property.rotationPeriod">rotationPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotation">SecretManagerRegionalSecretRotation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nextRotationTimeInput`<sup>Optional</sup> <a name="nextRotationTimeInput" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.property.nextRotationTimeInput"></a>

```typescript
public readonly nextRotationTimeInput: string;
```

- *Type:* string

---

##### `rotationPeriodInput`<sup>Optional</sup> <a name="rotationPeriodInput" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.property.rotationPeriodInput"></a>

```typescript
public readonly rotationPeriodInput: string;
```

- *Type:* string

---

##### `nextRotationTime`<sup>Required</sup> <a name="nextRotationTime" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.property.nextRotationTime"></a>

```typescript
public readonly nextRotationTime: string;
```

- *Type:* string

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.property.rotationPeriod"></a>

```typescript
public readonly rotationPeriod: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecretManagerRegionalSecretRotation;
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretRotation">SecretManagerRegionalSecretRotation</a>

---


### SecretManagerRegionalSecretTimeoutsOutputReference <a name="SecretManagerRegionalSecretTimeoutsOutputReference" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.Initializer"></a>

```typescript
import { secretManagerRegionalSecret } from '@cdktf/provider-google'

new secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts">SecretManagerRegionalSecretTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecretManagerRegionalSecretTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTimeouts">SecretManagerRegionalSecretTimeouts</a>

---


### SecretManagerRegionalSecretTopicsList <a name="SecretManagerRegionalSecretTopicsList" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.Initializer"></a>

```typescript
import { secretManagerRegionalSecret } from '@cdktf/provider-google'

new secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.get"></a>

```typescript
public get(index: number): SecretManagerRegionalSecretTopicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopics">SecretManagerRegionalSecretTopics</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecretManagerRegionalSecretTopics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopics">SecretManagerRegionalSecretTopics</a>[]

---


### SecretManagerRegionalSecretTopicsOutputReference <a name="SecretManagerRegionalSecretTopicsOutputReference" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.Initializer"></a>

```typescript
import { secretManagerRegionalSecret } from '@cdktf/provider-google'

new secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopics">SecretManagerRegionalSecretTopics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopicsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecretManagerRegionalSecretTopics;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.secretManagerRegionalSecret.SecretManagerRegionalSecretTopics">SecretManagerRegionalSecretTopics</a>

---



