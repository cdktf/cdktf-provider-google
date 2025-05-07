# `iamWorkforcePoolProvider` Submodule <a name="`iamWorkforcePoolProvider` Submodule" id="@cdktf/provider-google.iamWorkforcePoolProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkforcePoolProvider <a name="IamWorkforcePoolProvider" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider google_iam_workforce_pool_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer"></a>

```typescript
import { iamWorkforcePoolProvider } from '@cdktf/provider-google'

new iamWorkforcePoolProvider.IamWorkforcePoolProvider(scope: Construct, id: string, config: IamWorkforcePoolProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig">IamWorkforcePoolProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig">IamWorkforcePoolProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putExtraAttributesOauth2Client">putExtraAttributesOauth2Client</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putOidc">putOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putSaml">putSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetAttributeCondition">resetAttributeCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetAttributeMapping">resetAttributeMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetExtraAttributesOauth2Client">resetExtraAttributesOauth2Client</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetOidc">resetOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetSaml">resetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExtraAttributesOauth2Client` <a name="putExtraAttributesOauth2Client" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putExtraAttributesOauth2Client"></a>

```typescript
public putExtraAttributesOauth2Client(value: IamWorkforcePoolProviderExtraAttributesOauth2Client): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putExtraAttributesOauth2Client.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client">IamWorkforcePoolProviderExtraAttributesOauth2Client</a>

---

##### `putOidc` <a name="putOidc" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putOidc"></a>

```typescript
public putOidc(value: IamWorkforcePoolProviderOidc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putOidc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a>

---

##### `putSaml` <a name="putSaml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putSaml"></a>

```typescript
public putSaml(value: IamWorkforcePoolProviderSaml): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putSaml.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putTimeouts"></a>

```typescript
public putTimeouts(value: IamWorkforcePoolProviderTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts">IamWorkforcePoolProviderTimeouts</a>

---

##### `resetAttributeCondition` <a name="resetAttributeCondition" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetAttributeCondition"></a>

```typescript
public resetAttributeCondition(): void
```

##### `resetAttributeMapping` <a name="resetAttributeMapping" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetAttributeMapping"></a>

```typescript
public resetAttributeMapping(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetExtraAttributesOauth2Client` <a name="resetExtraAttributesOauth2Client" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetExtraAttributesOauth2Client"></a>

```typescript
public resetExtraAttributesOauth2Client(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOidc` <a name="resetOidc" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetOidc"></a>

```typescript
public resetOidc(): void
```

##### `resetSaml` <a name="resetSaml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetSaml"></a>

```typescript
public resetSaml(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IamWorkforcePoolProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isConstruct"></a>

```typescript
import { iamWorkforcePoolProvider } from '@cdktf/provider-google'

iamWorkforcePoolProvider.IamWorkforcePoolProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isTerraformElement"></a>

```typescript
import { iamWorkforcePoolProvider } from '@cdktf/provider-google'

iamWorkforcePoolProvider.IamWorkforcePoolProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isTerraformResource"></a>

```typescript
import { iamWorkforcePoolProvider } from '@cdktf/provider-google'

iamWorkforcePoolProvider.IamWorkforcePoolProvider.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.generateConfigForImport"></a>

```typescript
import { iamWorkforcePoolProvider } from '@cdktf/provider-google'

iamWorkforcePoolProvider.IamWorkforcePoolProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IamWorkforcePoolProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamWorkforcePoolProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamWorkforcePoolProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IamWorkforcePoolProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.extraAttributesOauth2Client">extraAttributesOauth2Client</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference">IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference">IamWorkforcePoolProviderOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference">IamWorkforcePoolProviderSamlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference">IamWorkforcePoolProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeConditionInput">attributeConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeMappingInput">attributeMappingInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.extraAttributesOauth2ClientInput">extraAttributesOauth2ClientInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client">IamWorkforcePoolProviderExtraAttributesOauth2Client</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.oidcInput">oidcInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.providerIdInput">providerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.samlInput">samlInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts">IamWorkforcePoolProviderTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.workforcePoolIdInput">workforcePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeCondition">attributeCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeMapping">attributeMapping</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.providerId">providerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.workforcePoolId">workforcePoolId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `extraAttributesOauth2Client`<sup>Required</sup> <a name="extraAttributesOauth2Client" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.extraAttributesOauth2Client"></a>

```typescript
public readonly extraAttributesOauth2Client: IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference">IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oidc`<sup>Required</sup> <a name="oidc" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.oidc"></a>

```typescript
public readonly oidc: IamWorkforcePoolProviderOidcOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference">IamWorkforcePoolProviderOidcOutputReference</a>

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.saml"></a>

```typescript
public readonly saml: IamWorkforcePoolProviderSamlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference">IamWorkforcePoolProviderSamlOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.timeouts"></a>

```typescript
public readonly timeouts: IamWorkforcePoolProviderTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference">IamWorkforcePoolProviderTimeoutsOutputReference</a>

---

##### `attributeConditionInput`<sup>Optional</sup> <a name="attributeConditionInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeConditionInput"></a>

```typescript
public readonly attributeConditionInput: string;
```

- *Type:* string

---

##### `attributeMappingInput`<sup>Optional</sup> <a name="attributeMappingInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeMappingInput"></a>

```typescript
public readonly attributeMappingInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `extraAttributesOauth2ClientInput`<sup>Optional</sup> <a name="extraAttributesOauth2ClientInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.extraAttributesOauth2ClientInput"></a>

```typescript
public readonly extraAttributesOauth2ClientInput: IamWorkforcePoolProviderExtraAttributesOauth2Client;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client">IamWorkforcePoolProviderExtraAttributesOauth2Client</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `oidcInput`<sup>Optional</sup> <a name="oidcInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.oidcInput"></a>

```typescript
public readonly oidcInput: IamWorkforcePoolProviderOidc;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a>

---

##### `providerIdInput`<sup>Optional</sup> <a name="providerIdInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.providerIdInput"></a>

```typescript
public readonly providerIdInput: string;
```

- *Type:* string

---

##### `samlInput`<sup>Optional</sup> <a name="samlInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.samlInput"></a>

```typescript
public readonly samlInput: IamWorkforcePoolProviderSaml;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IamWorkforcePoolProviderTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts">IamWorkforcePoolProviderTimeouts</a>

---

##### `workforcePoolIdInput`<sup>Optional</sup> <a name="workforcePoolIdInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.workforcePoolIdInput"></a>

```typescript
public readonly workforcePoolIdInput: string;
```

- *Type:* string

---

##### `attributeCondition`<sup>Required</sup> <a name="attributeCondition" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeCondition"></a>

```typescript
public readonly attributeCondition: string;
```

- *Type:* string

---

##### `attributeMapping`<sup>Required</sup> <a name="attributeMapping" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeMapping"></a>

```typescript
public readonly attributeMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.providerId"></a>

```typescript
public readonly providerId: string;
```

- *Type:* string

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.workforcePoolId"></a>

```typescript
public readonly workforcePoolId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkforcePoolProviderConfig <a name="IamWorkforcePoolProviderConfig" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.Initializer"></a>

```typescript
import { iamWorkforcePoolProvider } from '@cdktf/provider-google'

const iamWorkforcePoolProviderConfig: iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.providerId">providerId</a></code> | <code>string</code> | The ID for the provider, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.workforcePoolId">workforcePoolId</a></code> | <code>string</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.attributeCondition">attributeCondition</a></code> | <code>string</code> | A [Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.attributeMapping">attributeMapping</a></code> | <code>{[ key: string ]: string}</code> | Maps attributes from the authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.description">description</a></code> | <code>string</code> | A user-specified description of the provider. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.displayName">displayName</a></code> | <code>string</code> | A user-specified display name for the provider. Cannot exceed 32 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.extraAttributesOauth2Client">extraAttributesOauth2Client</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client">IamWorkforcePoolProviderExtraAttributesOauth2Client</a></code> | extra_attributes_oauth2_client block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#id IamWorkforcePoolProvider#id}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a></code> | oidc block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a></code> | saml block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts">IamWorkforcePoolProviderTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#location IamWorkforcePoolProvider#location}

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.providerId"></a>

```typescript
public readonly providerId: string;
```

- *Type:* string

The ID for the provider, which becomes the final component of the resource name.

This value must be 4-32 characters, and may contain the characters [a-z0-9-].
The prefix 'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#provider_id IamWorkforcePoolProvider#provider_id}

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.workforcePoolId"></a>

```typescript
public readonly workforcePoolId: string;
```

- *Type:* string

The ID to use for the pool, which becomes the final component of the resource name.

The IDs must be a globally unique string of 6 to 63 lowercase letters, digits, or hyphens.
It must start with a letter, and cannot have a trailing hyphen.
The prefix 'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#workforce_pool_id IamWorkforcePoolProvider#workforce_pool_id}

---

##### `attributeCondition`<sup>Optional</sup> <a name="attributeCondition" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.attributeCondition"></a>

```typescript
public readonly attributeCondition: string;
```

- *Type:* string

A [Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted.

The expression must output a boolean representing whether to allow the federation.

The following keywords may be referenced in the expressions:
  * 'assertion': JSON representing the authentication credential issued by the provider.
  * 'google': The Google attributes mapped from the assertion in the 'attribute_mappings'.
    'google.profile_photo' and 'google.display_name' are not supported.
  * 'attribute': The custom attributes mapped from the assertion in the 'attribute_mappings'.

The maximum length of the attribute condition expression is 4096 characters.
If unspecified, all valid authentication credentials will be accepted.

The following example shows how to only allow credentials with a mapped 'google.groups' value of 'admins':
```
"'admins' in google.groups"
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#attribute_condition IamWorkforcePoolProvider#attribute_condition}

---

##### `attributeMapping`<sup>Optional</sup> <a name="attributeMapping" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.attributeMapping"></a>

```typescript
public readonly attributeMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Maps attributes from the authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'.

Each key must be a string specifying the Google Cloud IAM attribute to map to.

The following keys are supported:
  * 'google.subject': The principal IAM is authenticating. You can reference this value in IAM bindings.
    This is also the subject that appears in Cloud Logging logs. This is a required field and
    the mapped subject cannot exceed 127 bytes.
  * 'google.groups': Groups the authenticating user belongs to. You can grant groups access to
    resources using an IAM 'principalSet' binding; access applies to all members of the group.
  * 'google.display_name': The name of the authenticated user. This is an optional field and
    the mapped display name cannot exceed 100 bytes. If not set, 'google.subject' will be displayed instead.
    This attribute cannot be referenced in IAM bindings.
  * 'google.profile_photo': The URL that specifies the authenticated user's thumbnail photo.
    This is an optional field. When set, the image will be visible as the user's profile picture.
    If not set, a generic user icon will be displayed instead.
    This attribute cannot be referenced in IAM bindings.

You can also provide custom attributes by specifying 'attribute.{custom_attribute}', where {custom_attribute}
is the name of the custom attribute to be mapped. You can define a maximum of 50 custom attributes.
The maximum length of a mapped attribute key is 100 characters, and the key may only contain the characters [a-z0-9_].

You can reference these attributes in IAM policies to define fine-grained access for a workforce pool
to Google Cloud resources. For example:
  * 'google.subject':
    'principal://iam.googleapis.com/locations/{location}/workforcePools/{pool}/subject/{value}'
  * 'google.groups':
    'principalSet://iam.googleapis.com/locations/{location}/workforcePools/{pool}/group/{value}'
  * 'attribute.{custom_attribute}':
    'principalSet://iam.googleapis.com/locations/{location}/workforcePools/{pool}/attribute.{custom_attribute}/{value}'

Each value must be a [Common Expression Language](https://opensource.google/projects/cel)
function that maps an identity provider credential to the normalized attribute specified
by the corresponding map key.

You can use the 'assertion' keyword in the expression to access a JSON representation of
the authentication credential issued by the provider.

The maximum length of an attribute mapping expression is 2048 characters. When evaluated,
the total size of all mapped attributes must not exceed 8KB.

For OIDC providers, you must supply a custom mapping that includes the 'google.subject' attribute.
For example, the following maps the sub claim of the incoming credential to the 'subject' attribute
on a Google token:
```
{"google.subject": "assertion.sub"}
```

An object containing a list of '"key": value' pairs.
Example: '{ "name": "wrench", "mass": "1.3kg", "count": "3" }'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#attribute_mapping IamWorkforcePoolProvider#attribute_mapping}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A user-specified description of the provider. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#description IamWorkforcePoolProvider#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#disabled IamWorkforcePoolProvider#disabled}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A user-specified display name for the provider. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#display_name IamWorkforcePoolProvider#display_name}

---

##### `extraAttributesOauth2Client`<sup>Optional</sup> <a name="extraAttributesOauth2Client" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.extraAttributesOauth2Client"></a>

```typescript
public readonly extraAttributesOauth2Client: IamWorkforcePoolProviderExtraAttributesOauth2Client;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client">IamWorkforcePoolProviderExtraAttributesOauth2Client</a>

extra_attributes_oauth2_client block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#extra_attributes_oauth2_client IamWorkforcePoolProvider#extra_attributes_oauth2_client}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#id IamWorkforcePoolProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oidc`<sup>Optional</sup> <a name="oidc" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.oidc"></a>

```typescript
public readonly oidc: IamWorkforcePoolProviderOidc;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a>

oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#oidc IamWorkforcePoolProvider#oidc}

---

##### `saml`<sup>Optional</sup> <a name="saml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.saml"></a>

```typescript
public readonly saml: IamWorkforcePoolProviderSaml;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a>

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#saml IamWorkforcePoolProvider#saml}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IamWorkforcePoolProviderTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts">IamWorkforcePoolProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#timeouts IamWorkforcePoolProvider#timeouts}

---

### IamWorkforcePoolProviderExtraAttributesOauth2Client <a name="IamWorkforcePoolProviderExtraAttributesOauth2Client" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.Initializer"></a>

```typescript
import { iamWorkforcePoolProvider } from '@cdktf/provider-google'

const iamWorkforcePoolProviderExtraAttributesOauth2Client: iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.attributesType">attributesType</a></code> | <code>string</code> | Represents the IdP and type of claims that should be fetched. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.clientId">clientId</a></code> | <code>string</code> | The OAuth 2.0 client ID for retrieving extra attributes from the identity provider. Required to get the Access Token using client credentials grant flow. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.clientSecret">clientSecret</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a></code> | client_secret block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.issuerUri">issuerUri</a></code> | <code>string</code> | The OIDC identity provider's issuer URI. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.queryParameters">queryParameters</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a></code> | query_parameters block. |

---

##### `attributesType`<sup>Required</sup> <a name="attributesType" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.attributesType"></a>

```typescript
public readonly attributesType: string;
```

- *Type:* string

Represents the IdP and type of claims that should be fetched.

* AZURE_AD_GROUPS_MAIL: Used to get the user's group claims from the Azure AD identity provider using configuration provided
in ExtraAttributesOAuth2Client and 'mail' property of the 'microsoft.graph.group' object is used for claim mapping.
See https://learn.microsoft.com/en-us/graph/api/resources/group?view=graph-rest-1.0#properties for more details on
'microsoft.graph.group' properties. The attributes obtained from idntity provider are mapped to 'assertion.groups'.
* AZURE_AD_GROUPS_ID:  Used to get the user's group claims from the Azure AD identity provider
using configuration provided in ExtraAttributesOAuth2Client and 'id'
property of the 'microsoft.graph.group' object is used for claim mapping. See
https://learn.microsoft.com/en-us/graph/api/resources/group?view=graph-rest-1.0#properties
for more details on 'microsoft.graph.group' properties. The
group IDs obtained from Azure AD are present in 'assertion.groups' for
OIDC providers and 'assertion.attributes.groups' for SAML providers for
attribute mapping. Possible values: ["AZURE_AD_GROUPS_MAIL", "AZURE_AD_GROUPS_ID"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#attributes_type IamWorkforcePoolProvider#attributes_type}

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The OAuth 2.0 client ID for retrieving extra attributes from the identity provider. Required to get the Access Token using client credentials grant flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#client_id IamWorkforcePoolProvider#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.clientSecret"></a>

```typescript
public readonly clientSecret: IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a>

client_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#client_secret IamWorkforcePoolProvider#client_secret}

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.issuerUri"></a>

```typescript
public readonly issuerUri: string;
```

- *Type:* string

The OIDC identity provider's issuer URI.

Must be a valid URI using the 'https' scheme. Required to get the OIDC discovery document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#issuer_uri IamWorkforcePoolProvider#issuer_uri}

---

##### `queryParameters`<sup>Optional</sup> <a name="queryParameters" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.queryParameters"></a>

```typescript
public readonly queryParameters: IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a>

query_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#query_parameters IamWorkforcePoolProvider#query_parameters}

---

### IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret <a name="IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret.Initializer"></a>

```typescript
import { iamWorkforcePoolProvider } from '@cdktf/provider-google'

const iamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret: iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret.property.value">value</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a></code> | value block. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret.property.value"></a>

```typescript
public readonly value: IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#value IamWorkforcePoolProvider#value}

---

### IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue <a name="IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue.Initializer"></a>

```typescript
import { iamWorkforcePoolProvider } from '@cdktf/provider-google'

const iamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue: iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue.property.plainText">plainText</a></code> | <code>string</code> | The plain text of the client secret value. |

---

##### `plainText`<sup>Required</sup> <a name="plainText" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue.property.plainText"></a>

```typescript
public readonly plainText: string;
```

- *Type:* string

The plain text of the client secret value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#plain_text IamWorkforcePoolProvider#plain_text}

---

### IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters <a name="IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters.Initializer"></a>

```typescript
import { iamWorkforcePoolProvider } from '@cdktf/provider-google'

const iamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters: iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters.property.filter">filter</a></code> | <code>string</code> | The filter used to request specific records from IdP. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

The filter used to request specific records from IdP.

In case of attributes type as AZURE_AD_GROUPS_MAIL and AZURE_AD_GROUPS_ID, it represents the
filter used to request specific groups for users from IdP. By default, all of the groups associated with the user are fetched. The
groups should be security enabled. See https://learn.microsoft.com/en-us/graph/search-query-parameter for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#filter IamWorkforcePoolProvider#filter}

---

### IamWorkforcePoolProviderOidc <a name="IamWorkforcePoolProviderOidc" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.Initializer"></a>

```typescript
import { iamWorkforcePoolProvider } from '@cdktf/provider-google'

const iamWorkforcePoolProviderOidc: iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.clientId">clientId</a></code> | <code>string</code> | The client ID. Must match the audience claim of the JWT issued by the identity provider. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.issuerUri">issuerUri</a></code> | <code>string</code> | The OIDC issuer URI. Must be a valid URI using the 'https' scheme. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.clientSecret">clientSecret</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret">IamWorkforcePoolProviderOidcClientSecret</a></code> | client_secret block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.jwksJson">jwksJson</a></code> | <code>string</code> | OIDC JWKs in JSON String format. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.webSsoConfig">webSsoConfig</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig">IamWorkforcePoolProviderOidcWebSsoConfig</a></code> | web_sso_config block. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client ID. Must match the audience claim of the JWT issued by the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#client_id IamWorkforcePoolProvider#client_id}

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.issuerUri"></a>

```typescript
public readonly issuerUri: string;
```

- *Type:* string

The OIDC issuer URI. Must be a valid URI using the 'https' scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#issuer_uri IamWorkforcePoolProvider#issuer_uri}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.clientSecret"></a>

```typescript
public readonly clientSecret: IamWorkforcePoolProviderOidcClientSecret;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret">IamWorkforcePoolProviderOidcClientSecret</a>

client_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#client_secret IamWorkforcePoolProvider#client_secret}

---

##### `jwksJson`<sup>Optional</sup> <a name="jwksJson" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.jwksJson"></a>

```typescript
public readonly jwksJson: string;
```

- *Type:* string

OIDC JWKs in JSON String format.

For details on definition of a
JWK, see https:tools.ietf.org/html/rfc7517. If not set, then we
use the 'jwks_uri' from the discovery document fetched from the
.well-known path for the 'issuer_uri'. Currently, RSA and EC asymmetric
keys are supported. The JWK must use following format and include only
the following fields:
```
{
  "keys": [
    {
          "kty": "RSA/EC",
          "alg": "<algorithm>",
          "use": "sig",
          "kid": "<key-id>",
          "n": "",
          "e": "",
          "x": "",
          "y": "",
          "crv": ""
    }
  ]
}
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#jwks_json IamWorkforcePoolProvider#jwks_json}

---

##### `webSsoConfig`<sup>Optional</sup> <a name="webSsoConfig" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.webSsoConfig"></a>

```typescript
public readonly webSsoConfig: IamWorkforcePoolProviderOidcWebSsoConfig;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig">IamWorkforcePoolProviderOidcWebSsoConfig</a>

web_sso_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#web_sso_config IamWorkforcePoolProvider#web_sso_config}

---

### IamWorkforcePoolProviderOidcClientSecret <a name="IamWorkforcePoolProviderOidcClientSecret" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret.Initializer"></a>

```typescript
import { iamWorkforcePoolProvider } from '@cdktf/provider-google'

const iamWorkforcePoolProviderOidcClientSecret: iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret.property.value">value</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue">IamWorkforcePoolProviderOidcClientSecretValue</a></code> | value block. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret.property.value"></a>

```typescript
public readonly value: IamWorkforcePoolProviderOidcClientSecretValue;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue">IamWorkforcePoolProviderOidcClientSecretValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#value IamWorkforcePoolProvider#value}

---

### IamWorkforcePoolProviderOidcClientSecretValue <a name="IamWorkforcePoolProviderOidcClientSecretValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue.Initializer"></a>

```typescript
import { iamWorkforcePoolProvider } from '@cdktf/provider-google'

const iamWorkforcePoolProviderOidcClientSecretValue: iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue.property.plainText">plainText</a></code> | <code>string</code> | The plain text of the client secret value. |

---

##### `plainText`<sup>Required</sup> <a name="plainText" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue.property.plainText"></a>

```typescript
public readonly plainText: string;
```

- *Type:* string

The plain text of the client secret value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#plain_text IamWorkforcePoolProvider#plain_text}

---

### IamWorkforcePoolProviderOidcWebSsoConfig <a name="IamWorkforcePoolProviderOidcWebSsoConfig" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig.Initializer"></a>

```typescript
import { iamWorkforcePoolProvider } from '@cdktf/provider-google'

const iamWorkforcePoolProviderOidcWebSsoConfig: iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig.property.assertionClaimsBehavior">assertionClaimsBehavior</a></code> | <code>string</code> | The behavior for how OIDC Claims are included in the 'assertion' object used for attribute mapping and attribute condition. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig.property.responseType">responseType</a></code> | <code>string</code> | The Response Type to request for in the OIDC Authorization Request for web sign-in. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig.property.additionalScopes">additionalScopes</a></code> | <code>string[]</code> | Additional scopes to request for in the OIDC authentication request on top of scopes requested by default. |

---

##### `assertionClaimsBehavior`<sup>Required</sup> <a name="assertionClaimsBehavior" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig.property.assertionClaimsBehavior"></a>

```typescript
public readonly assertionClaimsBehavior: string;
```

- *Type:* string

The behavior for how OIDC Claims are included in the 'assertion' object used for attribute mapping and attribute condition.

* MERGE_USER_INFO_OVER_ID_TOKEN_CLAIMS: Merge the UserInfo Endpoint Claims with ID Token Claims, preferring UserInfo Claim Values for the same Claim Name. This option is available only for the Authorization Code Flow.
* ONLY_ID_TOKEN_CLAIMS: Only include ID Token Claims. Possible values: ["MERGE_USER_INFO_OVER_ID_TOKEN_CLAIMS", "ONLY_ID_TOKEN_CLAIMS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#assertion_claims_behavior IamWorkforcePoolProvider#assertion_claims_behavior}

---

##### `responseType`<sup>Required</sup> <a name="responseType" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig.property.responseType"></a>

```typescript
public readonly responseType: string;
```

- *Type:* string

The Response Type to request for in the OIDC Authorization Request for web sign-in.

The 'CODE' Response Type is recommended to avoid the Implicit Flow, for security reasons.
* CODE: The 'response_type=code' selection uses the Authorization Code Flow for web sign-in. Requires a configured client secret.
* ID_TOKEN: The 'response_type=id_token' selection uses the Implicit Flow for web sign-in. Possible values: ["CODE", "ID_TOKEN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#response_type IamWorkforcePoolProvider#response_type}

---

##### `additionalScopes`<sup>Optional</sup> <a name="additionalScopes" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig.property.additionalScopes"></a>

```typescript
public readonly additionalScopes: string[];
```

- *Type:* string[]

Additional scopes to request for in the OIDC authentication request on top of scopes requested by default.

By default, the 'openid', 'profile' and 'email' scopes that are supported by the identity provider are requested.
Each additional scope may be at most 256 characters. A maximum of 10 additional scopes may be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#additional_scopes IamWorkforcePoolProvider#additional_scopes}

---

### IamWorkforcePoolProviderSaml <a name="IamWorkforcePoolProviderSaml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml.Initializer"></a>

```typescript
import { iamWorkforcePoolProvider } from '@cdktf/provider-google'

const iamWorkforcePoolProviderSaml: iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml.property.idpMetadataXml">idpMetadataXml</a></code> | <code>string</code> | SAML Identity provider configuration metadata xml doc. |

---

##### `idpMetadataXml`<sup>Required</sup> <a name="idpMetadataXml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml.property.idpMetadataXml"></a>

```typescript
public readonly idpMetadataXml: string;
```

- *Type:* string

SAML Identity provider configuration metadata xml doc.

The xml document should comply with [SAML 2.0 specification](https://docs.oasis-open.org/security/saml/v2.0/saml-metadata-2.0-os.pdf).
The max size of the acceptable xml document will be bounded to 128k characters.

The metadata xml document should satisfy the following constraints:
1) Must contain an Identity Provider Entity ID.
2) Must contain at least one non-expired signing key certificate.
3) For each signing key:
  a) Valid from should be no more than 7 days from now.
  b) Valid to should be no more than 10 years in the future.
4) Up to 3 IdP signing keys are allowed in the metadata xml.

When updating the provider's metadata xml, at least one non-expired signing key
must overlap with the existing metadata. This requirement is skipped if there are
no non-expired signing keys present in the existing metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#idp_metadata_xml IamWorkforcePoolProvider#idp_metadata_xml}

---

### IamWorkforcePoolProviderTimeouts <a name="IamWorkforcePoolProviderTimeouts" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts.Initializer"></a>

```typescript
import { iamWorkforcePoolProvider } from '@cdktf/provider-google'

const iamWorkforcePoolProviderTimeouts: iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#create IamWorkforcePoolProvider#create}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#delete IamWorkforcePoolProvider#delete}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#update IamWorkforcePoolProvider#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#create IamWorkforcePoolProvider#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#delete IamWorkforcePoolProvider#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/iam_workforce_pool_provider#update IamWorkforcePoolProvider#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference <a name="IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.Initializer"></a>

```typescript
import { iamWorkforcePoolProvider } from '@cdktf/provider-google'

new iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.putValue"></a>

```typescript
public putValue(value: IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a>

---

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.valueInput">valueInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.value"></a>

```typescript
public readonly value: IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a>

---


### IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference <a name="IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.Initializer"></a>

```typescript
import { iamWorkforcePoolProvider } from '@cdktf/provider-google'

new iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.thumbprint">thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.plainTextInput">plainTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.plainText">plainText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

---

##### `plainTextInput`<sup>Optional</sup> <a name="plainTextInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.plainTextInput"></a>

```typescript
public readonly plainTextInput: string;
```

- *Type:* string

---

##### `plainText`<sup>Required</sup> <a name="plainText" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.plainText"></a>

```typescript
public readonly plainText: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a>

---


### IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference <a name="IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.Initializer"></a>

```typescript
import { iamWorkforcePoolProvider } from '@cdktf/provider-google'

new iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putClientSecret">putClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putQueryParameters">putQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.resetQueryParameters">resetQueryParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientSecret` <a name="putClientSecret" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putClientSecret"></a>

```typescript
public putClientSecret(value: IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a>

---

##### `putQueryParameters` <a name="putQueryParameters" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putQueryParameters"></a>

```typescript
public putQueryParameters(value: IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putQueryParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a>

---

##### `resetQueryParameters` <a name="resetQueryParameters" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.resetQueryParameters"></a>

```typescript
public resetQueryParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientSecret">clientSecret</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.queryParameters">queryParameters</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference">IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.attributesTypeInput">attributesTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.issuerUriInput">issuerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.queryParametersInput">queryParametersInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.attributesType">attributesType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.issuerUri">issuerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client">IamWorkforcePoolProviderExtraAttributesOauth2Client</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference</a>

---

##### `queryParameters`<sup>Required</sup> <a name="queryParameters" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.queryParameters"></a>

```typescript
public readonly queryParameters: IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference">IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference</a>

---

##### `attributesTypeInput`<sup>Optional</sup> <a name="attributesTypeInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.attributesTypeInput"></a>

```typescript
public readonly attributesTypeInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a>

---

##### `issuerUriInput`<sup>Optional</sup> <a name="issuerUriInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.issuerUriInput"></a>

```typescript
public readonly issuerUriInput: string;
```

- *Type:* string

---

##### `queryParametersInput`<sup>Optional</sup> <a name="queryParametersInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.queryParametersInput"></a>

```typescript
public readonly queryParametersInput: IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a>

---

##### `attributesType`<sup>Required</sup> <a name="attributesType" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.attributesType"></a>

```typescript
public readonly attributesType: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.issuerUri"></a>

```typescript
public readonly issuerUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IamWorkforcePoolProviderExtraAttributesOauth2Client;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client">IamWorkforcePoolProviderExtraAttributesOauth2Client</a>

---


### IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference <a name="IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.Initializer"></a>

```typescript
import { iamWorkforcePoolProvider } from '@cdktf/provider-google'

new iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a>

---


### IamWorkforcePoolProviderOidcClientSecretOutputReference <a name="IamWorkforcePoolProviderOidcClientSecretOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.Initializer"></a>

```typescript
import { iamWorkforcePoolProvider } from '@cdktf/provider-google'

new iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.putValue"></a>

```typescript
public putValue(value: IamWorkforcePoolProviderOidcClientSecretValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue">IamWorkforcePoolProviderOidcClientSecretValue</a>

---

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference">IamWorkforcePoolProviderOidcClientSecretValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.valueInput">valueInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue">IamWorkforcePoolProviderOidcClientSecretValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret">IamWorkforcePoolProviderOidcClientSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.value"></a>

```typescript
public readonly value: IamWorkforcePoolProviderOidcClientSecretValueOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference">IamWorkforcePoolProviderOidcClientSecretValueOutputReference</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: IamWorkforcePoolProviderOidcClientSecretValue;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue">IamWorkforcePoolProviderOidcClientSecretValue</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IamWorkforcePoolProviderOidcClientSecret;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret">IamWorkforcePoolProviderOidcClientSecret</a>

---


### IamWorkforcePoolProviderOidcClientSecretValueOutputReference <a name="IamWorkforcePoolProviderOidcClientSecretValueOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.Initializer"></a>

```typescript
import { iamWorkforcePoolProvider } from '@cdktf/provider-google'

new iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.thumbprint">thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.plainTextInput">plainTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.plainText">plainText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue">IamWorkforcePoolProviderOidcClientSecretValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

---

##### `plainTextInput`<sup>Optional</sup> <a name="plainTextInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.plainTextInput"></a>

```typescript
public readonly plainTextInput: string;
```

- *Type:* string

---

##### `plainText`<sup>Required</sup> <a name="plainText" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.plainText"></a>

```typescript
public readonly plainText: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IamWorkforcePoolProviderOidcClientSecretValue;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue">IamWorkforcePoolProviderOidcClientSecretValue</a>

---


### IamWorkforcePoolProviderOidcOutputReference <a name="IamWorkforcePoolProviderOidcOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.Initializer"></a>

```typescript
import { iamWorkforcePoolProvider } from '@cdktf/provider-google'

new iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.putClientSecret">putClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.putWebSsoConfig">putWebSsoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resetJwksJson">resetJwksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resetWebSsoConfig">resetWebSsoConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientSecret` <a name="putClientSecret" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.putClientSecret"></a>

```typescript
public putClientSecret(value: IamWorkforcePoolProviderOidcClientSecret): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.putClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret">IamWorkforcePoolProviderOidcClientSecret</a>

---

##### `putWebSsoConfig` <a name="putWebSsoConfig" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.putWebSsoConfig"></a>

```typescript
public putWebSsoConfig(value: IamWorkforcePoolProviderOidcWebSsoConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.putWebSsoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig">IamWorkforcePoolProviderOidcWebSsoConfig</a>

---

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetJwksJson` <a name="resetJwksJson" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resetJwksJson"></a>

```typescript
public resetJwksJson(): void
```

##### `resetWebSsoConfig` <a name="resetWebSsoConfig" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resetWebSsoConfig"></a>

```typescript
public resetWebSsoConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.clientSecret">clientSecret</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference">IamWorkforcePoolProviderOidcClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.webSsoConfig">webSsoConfig</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference">IamWorkforcePoolProviderOidcWebSsoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret">IamWorkforcePoolProviderOidcClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.issuerUriInput">issuerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.jwksJsonInput">jwksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.webSsoConfigInput">webSsoConfigInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig">IamWorkforcePoolProviderOidcWebSsoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.issuerUri">issuerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.jwksJson">jwksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: IamWorkforcePoolProviderOidcClientSecretOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference">IamWorkforcePoolProviderOidcClientSecretOutputReference</a>

---

##### `webSsoConfig`<sup>Required</sup> <a name="webSsoConfig" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.webSsoConfig"></a>

```typescript
public readonly webSsoConfig: IamWorkforcePoolProviderOidcWebSsoConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference">IamWorkforcePoolProviderOidcWebSsoConfigOutputReference</a>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: IamWorkforcePoolProviderOidcClientSecret;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret">IamWorkforcePoolProviderOidcClientSecret</a>

---

##### `issuerUriInput`<sup>Optional</sup> <a name="issuerUriInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.issuerUriInput"></a>

```typescript
public readonly issuerUriInput: string;
```

- *Type:* string

---

##### `jwksJsonInput`<sup>Optional</sup> <a name="jwksJsonInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.jwksJsonInput"></a>

```typescript
public readonly jwksJsonInput: string;
```

- *Type:* string

---

##### `webSsoConfigInput`<sup>Optional</sup> <a name="webSsoConfigInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.webSsoConfigInput"></a>

```typescript
public readonly webSsoConfigInput: IamWorkforcePoolProviderOidcWebSsoConfig;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig">IamWorkforcePoolProviderOidcWebSsoConfig</a>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.issuerUri"></a>

```typescript
public readonly issuerUri: string;
```

- *Type:* string

---

##### `jwksJson`<sup>Required</sup> <a name="jwksJson" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.jwksJson"></a>

```typescript
public readonly jwksJson: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IamWorkforcePoolProviderOidc;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a>

---


### IamWorkforcePoolProviderOidcWebSsoConfigOutputReference <a name="IamWorkforcePoolProviderOidcWebSsoConfigOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer"></a>

```typescript
import { iamWorkforcePoolProvider } from '@cdktf/provider-google'

new iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.resetAdditionalScopes">resetAdditionalScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalScopes` <a name="resetAdditionalScopes" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.resetAdditionalScopes"></a>

```typescript
public resetAdditionalScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.additionalScopesInput">additionalScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.assertionClaimsBehaviorInput">assertionClaimsBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.responseTypeInput">responseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.additionalScopes">additionalScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.assertionClaimsBehavior">assertionClaimsBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.responseType">responseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig">IamWorkforcePoolProviderOidcWebSsoConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalScopesInput`<sup>Optional</sup> <a name="additionalScopesInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.additionalScopesInput"></a>

```typescript
public readonly additionalScopesInput: string[];
```

- *Type:* string[]

---

##### `assertionClaimsBehaviorInput`<sup>Optional</sup> <a name="assertionClaimsBehaviorInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.assertionClaimsBehaviorInput"></a>

```typescript
public readonly assertionClaimsBehaviorInput: string;
```

- *Type:* string

---

##### `responseTypeInput`<sup>Optional</sup> <a name="responseTypeInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.responseTypeInput"></a>

```typescript
public readonly responseTypeInput: string;
```

- *Type:* string

---

##### `additionalScopes`<sup>Required</sup> <a name="additionalScopes" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.additionalScopes"></a>

```typescript
public readonly additionalScopes: string[];
```

- *Type:* string[]

---

##### `assertionClaimsBehavior`<sup>Required</sup> <a name="assertionClaimsBehavior" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.assertionClaimsBehavior"></a>

```typescript
public readonly assertionClaimsBehavior: string;
```

- *Type:* string

---

##### `responseType`<sup>Required</sup> <a name="responseType" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.responseType"></a>

```typescript
public readonly responseType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IamWorkforcePoolProviderOidcWebSsoConfig;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig">IamWorkforcePoolProviderOidcWebSsoConfig</a>

---


### IamWorkforcePoolProviderSamlOutputReference <a name="IamWorkforcePoolProviderSamlOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.Initializer"></a>

```typescript
import { iamWorkforcePoolProvider } from '@cdktf/provider-google'

new iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.idpMetadataXmlInput">idpMetadataXmlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.idpMetadataXml">idpMetadataXml</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idpMetadataXmlInput`<sup>Optional</sup> <a name="idpMetadataXmlInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.idpMetadataXmlInput"></a>

```typescript
public readonly idpMetadataXmlInput: string;
```

- *Type:* string

---

##### `idpMetadataXml`<sup>Required</sup> <a name="idpMetadataXml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.idpMetadataXml"></a>

```typescript
public readonly idpMetadataXml: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IamWorkforcePoolProviderSaml;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a>

---


### IamWorkforcePoolProviderTimeoutsOutputReference <a name="IamWorkforcePoolProviderTimeoutsOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.Initializer"></a>

```typescript
import { iamWorkforcePoolProvider } from '@cdktf/provider-google'

new iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts">IamWorkforcePoolProviderTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamWorkforcePoolProviderTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts">IamWorkforcePoolProviderTimeouts</a>

---



