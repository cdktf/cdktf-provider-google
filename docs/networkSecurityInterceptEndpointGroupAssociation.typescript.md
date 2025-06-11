# `networkSecurityInterceptEndpointGroupAssociation` Submodule <a name="`networkSecurityInterceptEndpointGroupAssociation` Submodule" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityInterceptEndpointGroupAssociation <a name="NetworkSecurityInterceptEndpointGroupAssociation" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_intercept_endpoint_group_association google_network_security_intercept_endpoint_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer"></a>

```typescript
import { networkSecurityInterceptEndpointGroupAssociation } from '@cdktf/provider-google'

new networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation(scope: Construct, id: string, config: NetworkSecurityInterceptEndpointGroupAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig">NetworkSecurityInterceptEndpointGroupAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig">NetworkSecurityInterceptEndpointGroupAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetInterceptEndpointGroupAssociationId">resetInterceptEndpointGroupAssociationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkSecurityInterceptEndpointGroupAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts">NetworkSecurityInterceptEndpointGroupAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInterceptEndpointGroupAssociationId` <a name="resetInterceptEndpointGroupAssociationId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetInterceptEndpointGroupAssociationId"></a>

```typescript
public resetInterceptEndpointGroupAssociationId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityInterceptEndpointGroupAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isConstruct"></a>

```typescript
import { networkSecurityInterceptEndpointGroupAssociation } from '@cdktf/provider-google'

networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isTerraformElement"></a>

```typescript
import { networkSecurityInterceptEndpointGroupAssociation } from '@cdktf/provider-google'

networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isTerraformResource"></a>

```typescript
import { networkSecurityInterceptEndpointGroupAssociation } from '@cdktf/provider-google'

networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport"></a>

```typescript
import { networkSecurityInterceptEndpointGroupAssociation } from '@cdktf/provider-google'

networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkSecurityInterceptEndpointGroupAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkSecurityInterceptEndpointGroupAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkSecurityInterceptEndpointGroupAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_intercept_endpoint_group_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityInterceptEndpointGroupAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.locations">locations</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList">NetworkSecurityInterceptEndpointGroupAssociationLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.locationsDetails">locationsDetails</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList">NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference">NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupAssociationIdInput">interceptEndpointGroupAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupInput">interceptEndpointGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts">NetworkSecurityInterceptEndpointGroupAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroup">interceptEndpointGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupAssociationId">interceptEndpointGroupAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.locations"></a>

```typescript
public readonly locations: NetworkSecurityInterceptEndpointGroupAssociationLocationsList;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList">NetworkSecurityInterceptEndpointGroupAssociationLocationsList</a>

---

##### `locationsDetails`<sup>Required</sup> <a name="locationsDetails" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.locationsDetails"></a>

```typescript
public readonly locationsDetails: NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList">NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference">NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `interceptEndpointGroupAssociationIdInput`<sup>Optional</sup> <a name="interceptEndpointGroupAssociationIdInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupAssociationIdInput"></a>

```typescript
public readonly interceptEndpointGroupAssociationIdInput: string;
```

- *Type:* string

---

##### `interceptEndpointGroupInput`<sup>Optional</sup> <a name="interceptEndpointGroupInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupInput"></a>

```typescript
public readonly interceptEndpointGroupInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkSecurityInterceptEndpointGroupAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts">NetworkSecurityInterceptEndpointGroupAssociationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interceptEndpointGroup`<sup>Required</sup> <a name="interceptEndpointGroup" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroup"></a>

```typescript
public readonly interceptEndpointGroup: string;
```

- *Type:* string

---

##### `interceptEndpointGroupAssociationId`<sup>Required</sup> <a name="interceptEndpointGroupAssociationId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupAssociationId"></a>

```typescript
public readonly interceptEndpointGroupAssociationId: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityInterceptEndpointGroupAssociationConfig <a name="NetworkSecurityInterceptEndpointGroupAssociationConfig" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.Initializer"></a>

```typescript
import { networkSecurityInterceptEndpointGroupAssociation } from '@cdktf/provider-google'

const networkSecurityInterceptEndpointGroupAssociationConfig: networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.interceptEndpointGroup">interceptEndpointGroup</a></code> | <code>string</code> | The endpoint group that this association is connected to, for example: 'projects/123456789/locations/global/interceptEndpointGroups/my-eg'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.location">location</a></code> | <code>string</code> | The cloud location of the association, currently restricted to 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.network">network</a></code> | <code>string</code> | The VPC network that is associated. for example: 'projects/123456789/global/networks/my-network'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_intercept_endpoint_group_association#id NetworkSecurityInterceptEndpointGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.interceptEndpointGroupAssociationId">interceptEndpointGroupAssociationId</a></code> | <code>string</code> | The ID to use for the new association, which will become the final component of the endpoint group's resource name. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_intercept_endpoint_group_association#project NetworkSecurityInterceptEndpointGroupAssociation#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts">NetworkSecurityInterceptEndpointGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `interceptEndpointGroup`<sup>Required</sup> <a name="interceptEndpointGroup" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.interceptEndpointGroup"></a>

```typescript
public readonly interceptEndpointGroup: string;
```

- *Type:* string

The endpoint group that this association is connected to, for example: 'projects/123456789/locations/global/interceptEndpointGroups/my-eg'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_intercept_endpoint_group_association#intercept_endpoint_group NetworkSecurityInterceptEndpointGroupAssociation#intercept_endpoint_group}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The cloud location of the association, currently restricted to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_intercept_endpoint_group_association#location NetworkSecurityInterceptEndpointGroupAssociation#location}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The VPC network that is associated. for example: 'projects/123456789/global/networks/my-network'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_intercept_endpoint_group_association#network NetworkSecurityInterceptEndpointGroupAssociation#network}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_intercept_endpoint_group_association#id NetworkSecurityInterceptEndpointGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interceptEndpointGroupAssociationId`<sup>Optional</sup> <a name="interceptEndpointGroupAssociationId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.interceptEndpointGroupAssociationId"></a>

```typescript
public readonly interceptEndpointGroupAssociationId: string;
```

- *Type:* string

The ID to use for the new association, which will become the final component of the endpoint group's resource name.

If not provided, the
server will generate a unique ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_intercept_endpoint_group_association#intercept_endpoint_group_association_id NetworkSecurityInterceptEndpointGroupAssociation#intercept_endpoint_group_association_id}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_intercept_endpoint_group_association#labels NetworkSecurityInterceptEndpointGroupAssociation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_intercept_endpoint_group_association#project NetworkSecurityInterceptEndpointGroupAssociation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkSecurityInterceptEndpointGroupAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts">NetworkSecurityInterceptEndpointGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_intercept_endpoint_group_association#timeouts NetworkSecurityInterceptEndpointGroupAssociation#timeouts}

---

### NetworkSecurityInterceptEndpointGroupAssociationLocations <a name="NetworkSecurityInterceptEndpointGroupAssociationLocations" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocations.Initializer"></a>

```typescript
import { networkSecurityInterceptEndpointGroupAssociation } from '@cdktf/provider-google'

const networkSecurityInterceptEndpointGroupAssociationLocations: networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocations = { ... }
```


### NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails <a name="NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails.Initializer"></a>

```typescript
import { networkSecurityInterceptEndpointGroupAssociation } from '@cdktf/provider-google'

const networkSecurityInterceptEndpointGroupAssociationLocationsDetails: networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails = { ... }
```


### NetworkSecurityInterceptEndpointGroupAssociationTimeouts <a name="NetworkSecurityInterceptEndpointGroupAssociationTimeouts" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts.Initializer"></a>

```typescript
import { networkSecurityInterceptEndpointGroupAssociation } from '@cdktf/provider-google'

const networkSecurityInterceptEndpointGroupAssociationTimeouts: networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_intercept_endpoint_group_association#create NetworkSecurityInterceptEndpointGroupAssociation#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_intercept_endpoint_group_association#delete NetworkSecurityInterceptEndpointGroupAssociation#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_intercept_endpoint_group_association#update NetworkSecurityInterceptEndpointGroupAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_intercept_endpoint_group_association#create NetworkSecurityInterceptEndpointGroupAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_intercept_endpoint_group_association#delete NetworkSecurityInterceptEndpointGroupAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/network_security_intercept_endpoint_group_association#update NetworkSecurityInterceptEndpointGroupAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList <a name="NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer"></a>

```typescript
import { networkSecurityInterceptEndpointGroupAssociation } from '@cdktf/provider-google'

new networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.get"></a>

```typescript
public get(index: number): NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference <a name="NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer"></a>

```typescript
import { networkSecurityInterceptEndpointGroupAssociation } from '@cdktf/provider-google'

new networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails">NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails">NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails</a>

---


### NetworkSecurityInterceptEndpointGroupAssociationLocationsList <a name="NetworkSecurityInterceptEndpointGroupAssociationLocationsList" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer"></a>

```typescript
import { networkSecurityInterceptEndpointGroupAssociation } from '@cdktf/provider-google'

new networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.get"></a>

```typescript
public get(index: number): NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference <a name="NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer"></a>

```typescript
import { networkSecurityInterceptEndpointGroupAssociation } from '@cdktf/provider-google'

new networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocations">NetworkSecurityInterceptEndpointGroupAssociationLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkSecurityInterceptEndpointGroupAssociationLocations;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocations">NetworkSecurityInterceptEndpointGroupAssociationLocations</a>

---


### NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference <a name="NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkSecurityInterceptEndpointGroupAssociation } from '@cdktf/provider-google'

new networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts">NetworkSecurityInterceptEndpointGroupAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkSecurityInterceptEndpointGroupAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts">NetworkSecurityInterceptEndpointGroupAssociationTimeouts</a>

---



