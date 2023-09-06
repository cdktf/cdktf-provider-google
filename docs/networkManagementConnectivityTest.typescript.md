# `google_network_management_connectivity_test`

Refer to the Terraform Registory for docs: [`google_network_management_connectivity_test`](https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test).

# `networkManagementConnectivityTest` Submodule <a name="`networkManagementConnectivityTest` Submodule" id="@cdktf/provider-google.networkManagementConnectivityTest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagementConnectivityTest <a name="NetworkManagementConnectivityTest" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test google_network_management_connectivity_test}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer"></a>

```typescript
import { networkManagementConnectivityTest } from '@cdktf/provider-google'

new networkManagementConnectivityTest.NetworkManagementConnectivityTest(scope: Construct, id: string, config: NetworkManagementConnectivityTestConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig">NetworkManagementConnectivityTestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig">NetworkManagementConnectivityTestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetRelatedProjects">resetRelatedProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDestination` <a name="putDestination" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putDestination"></a>

```typescript
public putDestination(value: NetworkManagementConnectivityTestDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination">NetworkManagementConnectivityTestDestination</a>

---

##### `putSource` <a name="putSource" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putSource"></a>

```typescript
public putSource(value: NetworkManagementConnectivityTestSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource">NetworkManagementConnectivityTestSource</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkManagementConnectivityTestTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts">NetworkManagementConnectivityTestTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetRelatedProjects` <a name="resetRelatedProjects" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetRelatedProjects"></a>

```typescript
public resetRelatedProjects(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.isConstruct"></a>

```typescript
import { networkManagementConnectivityTest } from '@cdktf/provider-google'

networkManagementConnectivityTest.NetworkManagementConnectivityTest.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.isTerraformElement"></a>

```typescript
import { networkManagementConnectivityTest } from '@cdktf/provider-google'

networkManagementConnectivityTest.NetworkManagementConnectivityTest.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.isTerraformResource"></a>

```typescript
import { networkManagementConnectivityTest } from '@cdktf/provider-google'

networkManagementConnectivityTest.NetworkManagementConnectivityTest.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference">NetworkManagementConnectivityTestDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.source">source</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference">NetworkManagementConnectivityTestSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference">NetworkManagementConnectivityTestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.destinationInput">destinationInput</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination">NetworkManagementConnectivityTestDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.relatedProjectsInput">relatedProjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource">NetworkManagementConnectivityTestSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts">NetworkManagementConnectivityTestTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.relatedProjects">relatedProjects</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.destination"></a>

```typescript
public readonly destination: NetworkManagementConnectivityTestDestinationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference">NetworkManagementConnectivityTestDestinationOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.source"></a>

```typescript
public readonly source: NetworkManagementConnectivityTestSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference">NetworkManagementConnectivityTestSourceOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkManagementConnectivityTestTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference">NetworkManagementConnectivityTestTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.destinationInput"></a>

```typescript
public readonly destinationInput: NetworkManagementConnectivityTestDestination;
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination">NetworkManagementConnectivityTestDestination</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `relatedProjectsInput`<sup>Optional</sup> <a name="relatedProjectsInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.relatedProjectsInput"></a>

```typescript
public readonly relatedProjectsInput: string[];
```

- *Type:* string[]

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.sourceInput"></a>

```typescript
public readonly sourceInput: NetworkManagementConnectivityTestSource;
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource">NetworkManagementConnectivityTestSource</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkManagementConnectivityTestTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts">NetworkManagementConnectivityTestTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `relatedProjects`<sup>Required</sup> <a name="relatedProjects" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.relatedProjects"></a>

```typescript
public readonly relatedProjects: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagementConnectivityTestConfig <a name="NetworkManagementConnectivityTestConfig" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.Initializer"></a>

```typescript
import { networkManagementConnectivityTest } from '@cdktf/provider-google'

const networkManagementConnectivityTestConfig: networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination">NetworkManagementConnectivityTestDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.name">name</a></code> | <code>string</code> | Unique name for the connectivity test. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource">NetworkManagementConnectivityTestSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.description">description</a></code> | <code>string</code> | The user-supplied description of the Connectivity Test. Maximum of 512 characters. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test#id NetworkManagementConnectivityTest#id}. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test#project NetworkManagementConnectivityTest#project}. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.protocol">protocol</a></code> | <code>string</code> | IP Protocol of the test. When not provided, "TCP" is assumed. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.relatedProjects">relatedProjects</a></code> | <code>string[]</code> | Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts">NetworkManagementConnectivityTestTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.destination"></a>

```typescript
public readonly destination: NetworkManagementConnectivityTestDestination;
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination">NetworkManagementConnectivityTestDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test#destination NetworkManagementConnectivityTest#destination}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique name for the connectivity test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test#name NetworkManagementConnectivityTest#name}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.source"></a>

```typescript
public readonly source: NetworkManagementConnectivityTestSource;
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource">NetworkManagementConnectivityTestSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test#source NetworkManagementConnectivityTest#source}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The user-supplied description of the Connectivity Test. Maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test#description NetworkManagementConnectivityTest#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test#id NetworkManagementConnectivityTest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource labels to represent user-provided metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test#labels NetworkManagementConnectivityTest#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test#project NetworkManagementConnectivityTest#project}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

IP Protocol of the test. When not provided, "TCP" is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test#protocol NetworkManagementConnectivityTest#protocol}

---

##### `relatedProjects`<sup>Optional</sup> <a name="relatedProjects" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.relatedProjects"></a>

```typescript
public readonly relatedProjects: string[];
```

- *Type:* string[]

Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test#related_projects NetworkManagementConnectivityTest#related_projects}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkManagementConnectivityTestTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts">NetworkManagementConnectivityTestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test#timeouts NetworkManagementConnectivityTest#timeouts}

---

### NetworkManagementConnectivityTestDestination <a name="NetworkManagementConnectivityTestDestination" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.Initializer"></a>

```typescript
import { networkManagementConnectivityTest } from '@cdktf/provider-google'

const networkManagementConnectivityTestDestination: networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.instance">instance</a></code> | <code>string</code> | A Compute Engine instance URI. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.ipAddress">ipAddress</a></code> | <code>string</code> | The IP address of the endpoint, which can be an external or internal IP. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.network">network</a></code> | <code>string</code> | A Compute Engine network URI. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.port">port</a></code> | <code>number</code> | The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.projectId">projectId</a></code> | <code>string</code> | Project ID where the endpoint is located. |

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

A Compute Engine instance URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test#instance NetworkManagementConnectivityTest#instance}

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

The IP address of the endpoint, which can be an external or internal IP.

An IPv6 address is only allowed when the test's
destination is a global load balancer VIP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test#ip_address NetworkManagementConnectivityTest#ip_address}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

A Compute Engine network URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test#network NetworkManagementConnectivityTest#network}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test#port NetworkManagementConnectivityTest#port}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Project ID where the endpoint is located.

The Project ID can be
derived from the URI if you provide a VM instance or network URI.
The following are two cases where you must provide the project ID:
1. Only the IP address is specified, and the IP address is within
a GCP project. 2. When you are using Shared VPC and the IP address
that you provide is from the service project. In this case, the
network that the IP address resides in is defined in the host
project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test#project_id NetworkManagementConnectivityTest#project_id}

---

### NetworkManagementConnectivityTestSource <a name="NetworkManagementConnectivityTestSource" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.Initializer"></a>

```typescript
import { networkManagementConnectivityTest } from '@cdktf/provider-google'

const networkManagementConnectivityTestSource: networkManagementConnectivityTest.NetworkManagementConnectivityTestSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.instance">instance</a></code> | <code>string</code> | A Compute Engine instance URI. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.ipAddress">ipAddress</a></code> | <code>string</code> | The IP address of the endpoint, which can be an external or internal IP. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.network">network</a></code> | <code>string</code> | A Compute Engine network URI. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.networkType">networkType</a></code> | <code>string</code> | Type of the network where the endpoint is located. Possible values: ["GCP_NETWORK", "NON_GCP_NETWORK"]. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.port">port</a></code> | <code>number</code> | The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.projectId">projectId</a></code> | <code>string</code> | Project ID where the endpoint is located. |

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

A Compute Engine instance URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test#instance NetworkManagementConnectivityTest#instance}

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

The IP address of the endpoint, which can be an external or internal IP.

An IPv6 address is only allowed when the test's
destination is a global load balancer VIP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test#ip_address NetworkManagementConnectivityTest#ip_address}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

A Compute Engine network URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test#network NetworkManagementConnectivityTest#network}

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

Type of the network where the endpoint is located. Possible values: ["GCP_NETWORK", "NON_GCP_NETWORK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test#network_type NetworkManagementConnectivityTest#network_type}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test#port NetworkManagementConnectivityTest#port}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Project ID where the endpoint is located.

The Project ID can be
derived from the URI if you provide a VM instance or network URI.
The following are two cases where you must provide the project ID:

1. Only the IP address is specified, and the IP address is
within a GCP project.
2. When you are using Shared VPC and the IP address
that you provide is from the service project. In this case,
the network that the IP address resides in is defined in the
host project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test#project_id NetworkManagementConnectivityTest#project_id}

---

### NetworkManagementConnectivityTestTimeouts <a name="NetworkManagementConnectivityTestTimeouts" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts.Initializer"></a>

```typescript
import { networkManagementConnectivityTest } from '@cdktf/provider-google'

const networkManagementConnectivityTestTimeouts: networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test#create NetworkManagementConnectivityTest#create}. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test#delete NetworkManagementConnectivityTest#delete}. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test#update NetworkManagementConnectivityTest#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test#create NetworkManagementConnectivityTest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test#delete NetworkManagementConnectivityTest#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/network_management_connectivity_test#update NetworkManagementConnectivityTest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagementConnectivityTestDestinationOutputReference <a name="NetworkManagementConnectivityTestDestinationOutputReference" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.Initializer"></a>

```typescript
import { networkManagementConnectivityTest } from '@cdktf/provider-google'

new networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetInstance">resetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstance` <a name="resetInstance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetInstance"></a>

```typescript
public resetInstance(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetProjectId"></a>

```typescript
public resetProjectId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination">NetworkManagementConnectivityTestDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkManagementConnectivityTestDestination;
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination">NetworkManagementConnectivityTestDestination</a>

---


### NetworkManagementConnectivityTestSourceOutputReference <a name="NetworkManagementConnectivityTestSourceOutputReference" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.Initializer"></a>

```typescript
import { networkManagementConnectivityTest } from '@cdktf/provider-google'

new networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetInstance">resetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstance` <a name="resetInstance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetInstance"></a>

```typescript
public resetInstance(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetNetworkType"></a>

```typescript
public resetNetworkType(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetProjectId"></a>

```typescript
public resetProjectId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.networkTypeInput">networkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource">NetworkManagementConnectivityTestSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.networkTypeInput"></a>

```typescript
public readonly networkTypeInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkManagementConnectivityTestSource;
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource">NetworkManagementConnectivityTestSource</a>

---


### NetworkManagementConnectivityTestTimeoutsOutputReference <a name="NetworkManagementConnectivityTestTimeoutsOutputReference" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkManagementConnectivityTest } from '@cdktf/provider-google'

new networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts">NetworkManagementConnectivityTestTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkManagementConnectivityTestTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts">NetworkManagementConnectivityTestTimeouts</a>

---



