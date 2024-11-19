# `networkConnectivityRegionalEndpoint` Submodule <a name="`networkConnectivityRegionalEndpoint` Submodule" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivityRegionalEndpoint <a name="NetworkConnectivityRegionalEndpoint" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_connectivity_regional_endpoint google_network_connectivity_regional_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer"></a>

```typescript
import { networkConnectivityRegionalEndpoint } from '@cdktf/provider-google'

new networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint(scope: Construct, id: string, config: NetworkConnectivityRegionalEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig">NetworkConnectivityRegionalEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig">NetworkConnectivityRegionalEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkConnectivityRegionalEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts">NetworkConnectivityRegionalEndpointTimeouts</a>

---

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetAddress"></a>

```typescript
public resetAddress(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetSubnetwork"></a>

```typescript
public resetSubnetwork(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkConnectivityRegionalEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isConstruct"></a>

```typescript
import { networkConnectivityRegionalEndpoint } from '@cdktf/provider-google'

networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isTerraformElement"></a>

```typescript
import { networkConnectivityRegionalEndpoint } from '@cdktf/provider-google'

networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isTerraformResource"></a>

```typescript
import { networkConnectivityRegionalEndpoint } from '@cdktf/provider-google'

networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.generateConfigForImport"></a>

```typescript
import { networkConnectivityRegionalEndpoint } from '@cdktf/provider-google'

networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkConnectivityRegionalEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkConnectivityRegionalEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkConnectivityRegionalEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_connectivity_regional_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkConnectivityRegionalEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.pscForwardingRule">pscForwardingRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference">NetworkConnectivityRegionalEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.accessTypeInput">accessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.subnetworkInput">subnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.targetGoogleApiInput">targetGoogleApiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts">NetworkConnectivityRegionalEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.accessType">accessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.targetGoogleApi">targetGoogleApi</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `pscForwardingRule`<sup>Required</sup> <a name="pscForwardingRule" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.pscForwardingRule"></a>

```typescript
public readonly pscForwardingRule: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkConnectivityRegionalEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference">NetworkConnectivityRegionalEndpointTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `accessTypeInput`<sup>Optional</sup> <a name="accessTypeInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.accessTypeInput"></a>

```typescript
public readonly accessTypeInput: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: string;
```

- *Type:* string

---

##### `targetGoogleApiInput`<sup>Optional</sup> <a name="targetGoogleApiInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.targetGoogleApiInput"></a>

```typescript
public readonly targetGoogleApiInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkConnectivityRegionalEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts">NetworkConnectivityRegionalEndpointTimeouts</a>

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `targetGoogleApi`<sup>Required</sup> <a name="targetGoogleApi" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.targetGoogleApi"></a>

```typescript
public readonly targetGoogleApi: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivityRegionalEndpointConfig <a name="NetworkConnectivityRegionalEndpointConfig" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.Initializer"></a>

```typescript
import { networkConnectivityRegionalEndpoint } from '@cdktf/provider-google'

const networkConnectivityRegionalEndpointConfig: networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.accessType">accessType</a></code> | <code>string</code> | The access type of this regional endpoint. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.location">location</a></code> | <code>string</code> | The location of the RegionalEndpoint. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.name">name</a></code> | <code>string</code> | The name of the RegionalEndpoint. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.targetGoogleApi">targetGoogleApi</a></code> | <code>string</code> | The service endpoint this private regional endpoint connects to. Format: '{apiname}.{region}.p.rep.googleapis.com' Example: \"cloudkms.us-central1.p.rep.googleapis.com\". |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.address">address</a></code> | <code>string</code> | The IP Address of the Regional Endpoint. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.description">description</a></code> | <code>string</code> | A description of this resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_connectivity_regional_endpoint#id NetworkConnectivityRegionalEndpoint#id}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.network">network</a></code> | <code>string</code> | The name of the VPC network for this private regional endpoint. Format: 'projects/{project}/global/networks/{network}'. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_connectivity_regional_endpoint#project NetworkConnectivityRegionalEndpoint#project}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.subnetwork">subnetwork</a></code> | <code>string</code> | The name of the subnetwork from which the IP address will be allocated. Format: 'projects/{project}/regions/{region}/subnetworks/{subnetwork}'. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts">NetworkConnectivityRegionalEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

The access type of this regional endpoint.

This field is reflected in the PSC Forwarding Rule configuration to enable global access. Possible values: ["GLOBAL", "REGIONAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_connectivity_regional_endpoint#access_type NetworkConnectivityRegionalEndpoint#access_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the RegionalEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_connectivity_regional_endpoint#location NetworkConnectivityRegionalEndpoint#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the RegionalEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_connectivity_regional_endpoint#name NetworkConnectivityRegionalEndpoint#name}

---

##### `targetGoogleApi`<sup>Required</sup> <a name="targetGoogleApi" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.targetGoogleApi"></a>

```typescript
public readonly targetGoogleApi: string;
```

- *Type:* string

The service endpoint this private regional endpoint connects to. Format: '{apiname}.{region}.p.rep.googleapis.com' Example: \"cloudkms.us-central1.p.rep.googleapis.com\".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_connectivity_regional_endpoint#target_google_api NetworkConnectivityRegionalEndpoint#target_google_api}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

The IP Address of the Regional Endpoint.

When no address is provided, an IP from the subnetwork is allocated. Use one of the following formats: * IPv4 address as in '10.0.0.1' * Address resource URI as in 'projects/{project}/regions/{region}/addresses/{address_name}'

~> **Note:** This field accepts both a reference to a Compute Address resource, which is the resource name of which format is given in the description, and IP literal value. If the user chooses to input a reserved address value; they need to make sure that the reserved address is in IPv4 version, its purpose is GCE_ENDPOINT, its type is INTERNAL and its status is RESERVED. If the user chooses to input an IP literal, they need to make sure that it's a valid IPv4 address (x.x.x.x) within the subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_connectivity_regional_endpoint#address NetworkConnectivityRegionalEndpoint#address}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_connectivity_regional_endpoint#description NetworkConnectivityRegionalEndpoint#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_connectivity_regional_endpoint#id NetworkConnectivityRegionalEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_connectivity_regional_endpoint#labels NetworkConnectivityRegionalEndpoint#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The name of the VPC network for this private regional endpoint. Format: 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_connectivity_regional_endpoint#network NetworkConnectivityRegionalEndpoint#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_connectivity_regional_endpoint#project NetworkConnectivityRegionalEndpoint#project}.

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

The name of the subnetwork from which the IP address will be allocated. Format: 'projects/{project}/regions/{region}/subnetworks/{subnetwork}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_connectivity_regional_endpoint#subnetwork NetworkConnectivityRegionalEndpoint#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkConnectivityRegionalEndpointTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts">NetworkConnectivityRegionalEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_connectivity_regional_endpoint#timeouts NetworkConnectivityRegionalEndpoint#timeouts}

---

### NetworkConnectivityRegionalEndpointTimeouts <a name="NetworkConnectivityRegionalEndpointTimeouts" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts.Initializer"></a>

```typescript
import { networkConnectivityRegionalEndpoint } from '@cdktf/provider-google'

const networkConnectivityRegionalEndpointTimeouts: networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_connectivity_regional_endpoint#create NetworkConnectivityRegionalEndpoint#create}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_connectivity_regional_endpoint#delete NetworkConnectivityRegionalEndpoint#delete}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_connectivity_regional_endpoint#update NetworkConnectivityRegionalEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_connectivity_regional_endpoint#create NetworkConnectivityRegionalEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_connectivity_regional_endpoint#delete NetworkConnectivityRegionalEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/network_connectivity_regional_endpoint#update NetworkConnectivityRegionalEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivityRegionalEndpointTimeoutsOutputReference <a name="NetworkConnectivityRegionalEndpointTimeoutsOutputReference" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkConnectivityRegionalEndpoint } from '@cdktf/provider-google'

new networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts">NetworkConnectivityRegionalEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkConnectivityRegionalEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts">NetworkConnectivityRegionalEndpointTimeouts</a>

---



